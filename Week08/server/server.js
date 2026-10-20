import cors from "cors";
import express from "express";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";
const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.join(serverDirectory, "data");
const dataFile = path.join(dataDirectory, "students.json");

const initialStudents = [
  { id: 1, name: "王小明", department: "資訊管理學系", grade: 3 },
  { id: 2, name: "陳小華", department: "資訊工程學系", grade: 3 },
  { id: 3, name: "林小美", department: "企業管理學系", grade: 2 }
];

app.use(cors());
app.use(express.json());

async function readStudents() {
  try {
    return JSON.parse(await readFile(dataFile, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await mkdir(dataDirectory, { recursive: true });
    await writeFile(dataFile, `${JSON.stringify(initialStudents, null, 2)}\n`);
    return initialStudents;
  }
}

async function saveStudents(students) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(dataFile, `${JSON.stringify(students, null, 2)}\n`);
}

function parseStudent(body) {
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const department = typeof body?.department === "string"
    ? body.department.trim()
    : "";
  const grade = Number(body?.grade);

  if (!name || !department || !Number.isInteger(grade) || grade < 1 || grade > 4) {
    return {
      error: "name、department 必須是非空字串，grade 必須是 1 到 4 的整數。"
    };
  }

  return { student: { name, department, grade } };
}

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", message: "學生 API 正常運作" });
});

app.get("/api/students", async (_request, response, next) => {
  try {
    response.json(await readStudents());
  } catch (error) {
    next(error);
  }
});

app.get("/api/students/:id", async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    const student = (await readStudents()).find((item) => item.id === id);
    if (!student) {
      return response.status(404).json({ message: "找不到這位學生。" });
    }
    response.json(student);
  } catch (error) {
    next(error);
  }
});

app.post("/api/students", async (request, response, next) => {
  try {
    const parsed = parseStudent(request.body);
    if (parsed.error) {
      return response.status(400).json({ message: parsed.error });
    }

    const students = await readStudents();
    const student = {
      id: students.reduce((highest, item) => Math.max(highest, item.id), 0) + 1,
      ...parsed.student
    };
    students.push(student);
    await saveStudents(students);
    response.status(201).json(student);
  } catch (error) {
    next(error);
  }
});

app.put("/api/students/:id", async (request, response, next) => {
  try {
    const parsed = parseStudent(request.body);
    if (parsed.error) {
      return response.status(400).json({ message: parsed.error });
    }

    const students = await readStudents();
    const index = students.findIndex((item) => item.id === Number(request.params.id));
    if (index === -1) {
      return response.status(404).json({ message: "找不到這位學生。" });
    }

    students[index] = { id: students[index].id, ...parsed.student };
    await saveStudents(students);
    response.json(students[index]);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/students/:id", async (request, response, next) => {
  try {
    const students = await readStudents();
    const index = students.findIndex((item) => item.id === Number(request.params.id));
    if (index === -1) {
      return response.status(404).json({ message: "找不到這位學生。" });
    }

    const [deletedStudent] = students.splice(index, 1);
    await saveStudents(students);
    response.json({ message: "學生資料已刪除。", student: deletedStudent });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ message: "伺服器發生錯誤。" });
});

app.listen(port, host, () => {
  console.log(`學生 API 已啟動：http://localhost:${port}`);
  console.log(`區域網路裝置可使用這台電腦的 IP 與連接埠 ${port} 呼叫 API。`);
});

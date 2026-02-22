import { faker } from "@faker-js/faker";
import type { Employee } from "../utils/types/employType";


const departments = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Operations"
];

const roles = [
  "Junior Developer",
  "Senior Developer",
  "Tech Lead",
  "Manager",
  "QA Engineer",
  "Product Manager",
  "Designer",
  "DevOps Engineer"
];

const skillsPool = [
  "React",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
  "Java",
  "Next.js"
];

function getRandomSkills() {
  return faker.helpers.arrayElements(skillsPool, {
    min: 2,
    max: 5,
  });
}

function generateEmployee(id: number): Employee {
  const joinDate = faker.date.past({ years: 5 });
  const lastReview = faker.date.between({
    from: joinDate,
    to: new Date(),
  });

  return {
    id,
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    department: faker.helpers.arrayElement(departments),
    role: faker.helpers.arrayElement(roles),
    salary: faker.number.int({ min: 40000, max: 150000 }),
    joinDate: joinDate.toISOString().split("T")[0],
    isActive: faker.datatype.boolean(),
    skills: getRandomSkills(),
    address: {
      city: faker.location.city(),
      state: faker.location.state({ abbreviated: true }),
      country: faker.location.country(),
    },
    projects: faker.number.int({ min: 0, max: 8 }),
    lastReview: lastReview.toISOString().split("T")[0],
    performanceRating: Number(
      faker.number.float({ min: 2.5, max: 5, }).toFixed(1)
    ),
  };
}

export function generateEmployees(count = 50): Employee[] {
  return Array.from({ length: count }, (_, i) =>
    generateEmployee(i + 1)
  );
}


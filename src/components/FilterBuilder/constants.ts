export const fieldRegistry = {
  id: { label: "ID", type: "number" },
  name: { label: "Name", type: "text" },
  email: { label: "Email", type: "text" },
  department: {
    label: "Department",
    type: "singleSelect",
    options: ["Engineering", "HR", "Sales", "Marketing", "Finance"],
  },
  role: {
    label: "Role",
    type: "singleSelect",
    options: ["Manager", "Developer", "Designer", "Analyst", "Intern"],
  },
  salary: { label: "Salary", type: "number" },
  joinDate: { label: "Joining Date", type: "date" },
  isActive: { label: "Active Status", type: "boolean" },
  skills: {
    label: "Skills",
    type: "multiSelect",
    options: ["JavaScript", "TypeScript", "Python", "React", "NodeJS", "UI/UX"],
  },
  addressCity: { label: "City", type: "text" },
  addressState: { label: "State", type: "text" },
  addressCountry: { label: "Country", type: "text" },
  projects: { label: "Number of Projects", type: "number" },
  lastReview: { label: "Last Review Date", type: "date" },
  performanceRating: { label: "Performance Rating", type: "number" },
} as const;

export const operatorTypeMap = {
  text: ["equals", "contains", "startsWith", "endsWith", "doesNotContain"],
  number: ["equals", "greaterThan", "lessThan", "gte", "lte", "between"],
  date: ["equals", "before", "after", "between"], // single or range
  boolean: ["is", "isNot"],
  singleSelect: ["is", "isNot"],
  multiSelect: ["in", "notIn"],
  currency: ["equals", "greaterThan", "lessThan", "gte", "lte", "between"], 
} as const;

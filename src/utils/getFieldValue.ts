import type { Employee } from "./types/employType";
// for nested values 
export function getFieldValue(emp: Employee, field:keyof Employee | string) {
  type AddressKeys = keyof Employee["address"]
  if (field.startsWith("address")) {
    const key = field.replace("address", "").toLowerCase() as AddressKeys;
    return emp.address?.[key];
  }
  return emp[field as keyof Employee];
}
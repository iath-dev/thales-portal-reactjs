import axios from "axios";
import { Employee } from "../interfaces/Business";

interface BusinessServiceInterface {
    getEmployees(): Promise<Employee[]>;
    getEmployee(id: string): Promise<Employee>;
}

const BusinessService: BusinessServiceInterface = {
    getEmployees: () => {
        return new Promise( async (resolve, reject) => {
            try {
                const employees = await axios.get<Employee[]>("http://localhost:8080/api/v1/employees");
    
                resolve(employees.data);
            } catch (e) {
                reject(e);
            }
        })
    },
    getEmployee: (id: string) => {
        return new Promise(async (resolve, reject) => {
            try {
                const employee = await axios.get<Employee>(`http://localhost:8080/api/v1/employee/${id}`);

                resolve(employee.data);
            } catch (e) {
                reject(e);
            }
        });
    }
}

export default BusinessService;

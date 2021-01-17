import { uuid } from "./utils"

export default {
    name: "GamesWorkShop",
    clientId: "264570",
    columns: [
        {
            name: "New Leads",
            projects: [
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Joe Doe",
                    value: 40000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                },
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Jane Cooper",
                    value: 50000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                },
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Sarah Conor",
                    value: 60000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                }
            ]
        },
        {
            name: "Proposals",
            projects: [
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "James Dean",
                    value: 70000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                }
            ]
        },
        {
            name: "Confirmed Projects",
            projects: [
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Andy Burr",
                    value: 80000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                }
            ]
        },
        {
            name: "In-Progress",
            projects: [
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Bruce Fuss",
                    value: 90000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                }
            ]
        },
        {
            name: "Invoices",
            projects: [
                {
                    address: "12 Bedok North Ave 3",
                    description: "",
                    name: "Drew James",
                    value: 100000,
                    id: uuid(),
                    userAssigned: "Samuel Tan"
                }
            ]
        }
    ]
}

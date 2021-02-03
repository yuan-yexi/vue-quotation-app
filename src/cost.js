import { uuid } from "./utils"

export default {
    costBook: [
        {
            id: uuid(),
            name: "Floor tiling",
            type: "Component",
            trade: "Masonry",
            location: ["Kitchen", "Bathroom"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Wall tiling",
            type: "Component",
            trade: "Masonry",
            location: ["Kitchen", "Bathroom"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Wall plastering",
            type: "Line Item",
            trade: "Masonry",
            location: ["Kitchen", "Bathroom", "General"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Full Height Cabinet",
            type: "Component",
            trade: "Carpentry",
            location: ["Kitchen", "Bathroom", "General"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Top Cabinet",
            type: "Component",
            trade: "Carpentry",
            location: ["Kitchen", "Bathroom", "General"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Top and bottom Cabinet",
            type: "Component",
            trade: "Carpentry",
            location: ["Kitchen", "Bathroom", "General"],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        },
        {
            id: uuid(),
            name: "Wall painting",
            type: "Component",
            trade: "Carpentry",
            location: [
                "Kitchen",
                "Living Room",
                "General",
                " Study Room",
                "Bedroom"
            ],
            lineItems: [
                {
                    id: uuid(),
                    description: "",
                    unit: "ft",
                    unitPrice: 8,
                    qty: 120,
                    total: 960
                }
            ]
        }
    ]
}

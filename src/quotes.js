import { uuid } from "./utils"

export default {
    quotesCollection: [
        {
            projectName: "10D Bedok South Ave 2",
            clientName: "John Joe",
            uid: uuid(),
            totalProjectPrice: 0,
            totalProjectCost: 0,
            totalProjectProfit: 0,
            totalProjectMargins: 0,
            tags: [],
            costGroups: [
                {
                    costGroupName: "Floor Tiling",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Kitchen",
                    trade: "Masonry",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                }
                            ]
                        },
                        {
                            lineItemName:
                                "Supply labour and materials to hack existing flooring tiles",
                            lineItemDescription:
                                "Labour and materials for hacking works",
                            uid: uuid(),
                            unit: "sqft",
                            price: 12,
                            cost: 8,
                            profit: 4,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    margins: 0,
                                    total: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    costGroupName: "Shelfing",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Kitchen",
                    trade: "Carpentry",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    costGroupName: "Lighting",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Kitchen",
                    trade: "Electrical",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    costGroupName: "Wardrobe",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Bedroom 1",
                    trade: "Carpentry",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            margins: 0,
                            totalCost: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    costGroupName: "Shelfs",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Bedroom 1",
                    trade: "Carpentry",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    costGroupName: "Flooring",
                    costGroupDescription: "Tile floors in kitchen",
                    uid: uuid(),
                    location: "Bedroom 1",
                    trade: "Masonry",
                    totalPrice: 0,
                    totalCost: 0,
                    totalProfit: 0,
                    totalMargins: 0,
                    tags: [],
                    lineItems: [
                        {
                            lineItemName:
                                "Supply labour and materials to install screed levelling and waterproofing",
                            lineItemDescription:
                                "Labour and materials to install",
                            uid: uuid(),
                            unit: "sqft",
                            price: 10,
                            cost: 5,
                            profit: 5,
                            quantity: 0,
                            totalCost: 0,
                            total: 0,
                            margins: 0,
                            tags: [],
                            components: [
                                {
                                    name: "White Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 7,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Blue Wall Tiles",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 3,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                },
                                {
                                    name: "Waterproofing",
                                    uid: uuid(),
                                    unit: "sqft",
                                    suggestedPrice: 0,
                                    cost: 0,
                                    quantity: 0,
                                    total: 0,
                                    margins: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

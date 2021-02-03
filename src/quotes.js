import { uuid } from "./utils"

export default {
    quote: [
        {
            location: "Kitchen",
            id: uuid(),
            trades: [
                {
                    name: "Masonry Works",
                    components: [
                        {
                            name: "Floor tiling",
                            id: uuid(),
                            componentPrice: 0,
                            componentQty: 0,
                            componentUnit: 0,
                            componentUnitPrice: 0,
                            componentUnitCost: 200,
                            componentMarkUp: 0,
                            componentTotalPrice: 0,
                            lineItemTotalPrice: 0,
                            lineItemTotalCost: 0,
                            lineItems: [
                                {
                                    id: uuid(),
                                    description:
                                        "Supply labour and materials to install screed levelling and waterproofing",
                                    unit: "ft",
                                    unitPrice: 8,
                                    qty: 120,
                                    total: 960,
                                    markup: 10,
                                    unitCost: 20,
                                    totalCost: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

import { uuid } from "./utils"

export default {
    quote: [
        {
            location: "Kitchen",
            id: uuid(),
            trades: [
                {
                    name: "Masonry Works",
                    items: [
                        {
                            item: "Floor tiling",
                            id: 123,
                            lineItems: [
                                {
                                    id: "1",
                                    description:
                                        "Supply labour and materials to install screed levelling and waterproofing",
                                    unit: "ft",
                                    unitPrice: 8,
                                    qty: 120,
                                    total: 960
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { items } = useCartContext();

    const total = () => {
        return items.reduce((previous, current) => {
            return previous + current.price;
        }, 0)
    }

    return (
        <div class="max-w-md my-8 mx-auto">
            <Card rounded={true}>
                <h2>Your shopping cart!</h2>
                <For each={items}>
                    {(item) => (
                        <p><strong>{item.title}</strong> ${item.price} x {item.quantity} Remove(X)</p>
                    )}
                </For>

                <p class="mt-8 pt-4 border-t-2 font-bold">$Total price: {total()}</p>
            </Card>

        </div>
    )
}

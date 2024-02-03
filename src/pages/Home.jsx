import { For, Show, createResource } from "solid-js"
import Card from "../components/Card"
import { A } from "@solidjs/router"

const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')

    return res.json()
}

export default function Home() {
    const [products] = createResource(fetchProducts);

    return (
        <Show when={products()} fallback={<p>Loading...</p>}>
            <div class='grid grid-cols-4 gap-10 my- classgrid grid-cols-4 gap-10 my-4'>
                <For each={products()} >
                    {(product) => (
                        <Card rounded={true} flat={true}>
                            <img src={product.image} alt="productimg" />
                            <h2 class="my-3 font-bold">{product.title}</h2>
                            <A href={`/product/${product.id}`} class="btn">View</A>
                        </Card>
                    )}
                </For>
            </div>
        </Show>

    )
}

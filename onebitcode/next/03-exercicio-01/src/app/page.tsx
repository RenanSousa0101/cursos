import Image from "next/image";

const products = [
  {
    id: 1,
    image: {
      src: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
      alt: "Macbook Air",
      width: 354,
      height: 176
    },
    name: "Macbook Air de 13 e 15 pol.",
    cpu: "Chip M2 ou M3",
    description: "Superfinos e rápidos para trabalhar, jogar ou criar aonde quer que você vá.",
    price: "A partir de R$ 916,58/mês ou R$ 10.999*"
  },
  {
    id: 2,
    image: {
      src: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
      alt: "Macbook Pro",
      width: 354,
      height: 176
    },
    name: "Macbook Pro de 14 e 16 pol.",
    cpu: "Chip M3, M3 Pro ou M3 Max",
    description: "Os notebooks Mac mais avançados para fluxos de trabalho pesados.",
    price: "A partir de R$ 1.541,58/mês ou R$ 18.499*"
  }
]

export default function Home() {
  return (
    <main className="main">
      <h1 className="title">Conheça a família Macbook.</h1>
      <p className="subtitle">Agora com novos modelos M3</p>

      <div className="products">
        {products.map((product) => (
          <article key={product.id} className="product">
            <Image src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} />

            <h2 className="product-name">{product.name}</h2>
            <p className="product-cpu">{product.cpu}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>

            <div className="btn-group">
              <a href="#" className="btn primary">Saiba Mais</a>
              <a href="#" className="btn outline">Comprar</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

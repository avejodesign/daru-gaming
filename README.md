
# Daru Gaming

Para fazer as alteração do site para o novo visual, você deve seguir esses passos:



## 1. Passos para adicionar dependências do projeto

#### a. Adicionar Swiper, React-Tooltip & SVG View: 
`npm install swiper react-tooltip @svgr/webpack`

#### b. Adicionar código de visualização de SVG:
Entre no arquivo `next.config.ts` e adicione o `webpack function`

Aqui está como deve ser feito:
```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) { // Adicione essa função
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;

```

## 2. Passos para adicionar o visual e os componentes que estão ligados na página do produto:

#### a. Vá até a página `page.tsx` e copie todos os códigos e dependências e insira na página de produto.

#### b. Adicione todos os componentes da pasta `components` no projeto real da DaruGaming, para que os `import` funcionam. 

#### c. Vá em globals.css e copie do comentário `Copie daqui para abaixo` até o final da do arquivo.

#### d. Por fim, adicione todas as fotos que estão na pasta `assets` para o projeto real da DaruGaming.


## 3. Esses passos pode facilitar ao integrar as informações do back-end para o visual novo.

#### a. No arquivo `index.tsx` da pasta `BuyProduct` para alterar as informações do `SELECT TAG`.
Adicione as opções na `const dropdownItems` assim as opções iram aparecer no Dropdown Select. Outra coisa é que quando não ser opção, deve mudar o nome e o SVG, caso não tenha variação, apenas esconda 

#### b. No arquivo `index.tsx` da pasta `ProductGallery` deve listar duas vezes as fotos do produto porém com um detalhe, onde o primeiro Slide deve mostrar o Video utilizando Iframe.

```javascript
<SwiperSlide>
    <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
            key={key}
            className="w-full h-full absolute"
            src={`https://www.youtube.com/embed/rn4qhWWfgCM?si=thODneP-A-PRtGQ-`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
</SwiperSlide>
`
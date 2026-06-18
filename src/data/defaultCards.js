//cards padrao para dia dos namorados
import doceCarinho from "../assets/imG/doceCarinho.jpg";
import puroRomance from "../assets/img/puroRomance.jpg";
import eternaDevocao from "../assets/img/eternaDevocao.jpg";
import coracaoArdente from "../assets/img/coracaoArdente.jpg";
import promessaDeAmor from "../assets/img/promessaDeAmor.jpg";
import lindasDeclaracoes from "../assets/img/lindasDeclaracoes.jpg"
import harmoniaFloral from "../assets/img/harmoniaFloral.jpg";
import primeiroEncontro from "../assets/img/primeiroEncontro.jpg";
import lacosDeAmor from "../assets/img/lacosDeAmor.jpg";
import essenciaDoAmor from "../assets/img/essenciaDoAmor.jpg";

//cards extras para dia dos namorados
import arranjo1 from "../assets/img/arranjo1.jpg";
import arranjo2 from "../assets/img/arranjo2.jpg";
import arranjo3 from "../assets/img/arranjo3.jpg";
import arranjo4 from "../assets/img/arranjo4.jpg";
import arranjo5 from "../assets/img/arranjo5.jpg";
import arranjo6 from "../assets/img/arranjo6.jpg";
import arranjo7 from "../assets/img/arranjo7.jpg";
import arranjo8 from "../assets/img/arranjo8.jpg";

//cards padrao para arranjos
import buque11 from "../assets/img/bouquet11.jpg";
import buque12 from "../assets/img/bouquet12.jpg";
import buque13 from "../assets/img/bouquet13.jpg";
import buque14 from "../assets/img/bouquet14.jpg";
import buque15 from "../assets/img/bouquet15.jpg";
import buque16 from "../assets/img/bouquet16.jpg";
import buque17 from "../assets/img/bouquet17.jpg";
import buque18 from "../assets/img/bouquet18.jpg";
import buque19 from "../assets/img/bouquet19.jpg";
import buque20 from "../assets/img/bouquet20.jpg";

//cards extras para arranjos
import buquearranjo1 from "../assets/img/arranjobouquet1.jpg";
import buquearranjo2 from "../assets/img/arranjobouquet2.jpg";
import buquearranjo3 from "../assets/img/arranjobouquet3.jpg";
import buquearranjo4 from "../assets/img/arranjobouquet4.jpg";
import buquearranjo5 from "../assets/img/arranjobouquet5.jpg";
import buquearranjo6 from "../assets/img/arranjobouquet6.jpg";
import buquearranjo7 from "../assets/img/arranjobouquet7.jpg";
import buquearranjo8 from "../assets/img/arranjobouquet8.jpg";

//cards padrao para extra
import buqueextra1 from "../assets/img/extrabouquet1.jpg";
import buqueextra2 from "../assets/img/extrabouquet2.jpg";
import buqueextra3 from "../assets/img/extrabouquet3.jpg";
import buqueextra4 from "../assets/img/extrabouquet4.jpg";
import buqueextra5 from "../assets/img/extrabouquet5.jpg";
import buqueextra6 from "../assets/img/extrabouquet6.jpg";
import buqueextra7 from "../assets/img/extrabouquet7.jpg";
import buqueextra8 from "../assets/img/extrabouquet8.jpg";
import buqueextra9 from "../assets/img/extrabouquet9.jpg";
import buqueextra10 from "../assets/img/extrabouquet10.jpg";

//cards extras para extra
import arranjoextra1 from "../assets/img/arranjoextra1.jpg";
import arranjoextra2 from "../assets/img/arranjoextra2.jpg";
import arranjoextra3 from "../assets/img/arranjoextra3.jpg";
import arranjoextra4 from "../assets/img/arranjoextra4.jpg";
import arranjoextra5 from "../assets/img/arranjoextra5.jpg";
import arranjoextra6 from "../assets/img/arranjoextra6.jpg";
import arranjoextra7 from "../assets/img/arranjoextra7.jpg";
import arranjoextra8 from "../assets/img/arranjoextra8.jpg";



import { section } from "framer-motion/client";

export const flowersData = [
    {
        id: 1,
        category: "event",
        section: "main",
        title: "Doce Carinho",
        about: "Um buquê delicado e encantador que expressa afeto, ternura e romantismo. As rosas em tons de vermelho e rosa se harmonizam com os crisântemos brancos e as suaves gipsofilas, criando uma composição elegante e cheia de significado — perfeita para demonstrar carinho e tornar qualquer momento ainda mais especial.",
        flowers: ["Rosas", "Crisantêmos", "Gipsófilas"],
        colors: ["Vermelho", "Rosa", "Branco"],
        price: "R$180,00",
        rating: 4.7,
        image: doceCarinho
    },

    {
        id: 2,
        category: "event",
        section: "main",
        title: "Eterna Devoção",
        about: "Um buquê marcante que simboliza a força de um amor verdadeiro e duradouro. As vibrantes gérberas vermelhas se unem à delicadeza das gipsofilas brancas, formando uma combinação cheia de elegância e significado — perfeita para expressar sentimentos profundos e celebrar uma conexão que atravessa o tempo.",
        flowers: ["Gérberas", "Gipsófilas"],
        colors: ["Vermelho", "Branco"],
        price: "R$150,00",
        rating: 4.2,
        image: eternaDevocao
    },

    {
        id: 3,
        category: "event",
        section: "main",
        title: "Puro Romance",
        about: "Um buquê apaixonante que celebra o amor em sua forma mais intensa. As rosas vermelhas se unem as margaridas para criar uma combinação única — perfeita para transformar o Dia dos Namorados em um momento inesquecível.",
        flowers: ["Rosas", "Margaridas"],
        colors: ["Vermelho", "Branco"],
        price: "R$120,00",
        rating: 4.5,
        image: puroRomance
    },

    {
        id: 4,
        category: "event",
        section: "main",
        title: "Coração Ardente",
        about: "Uma composição vibrante que traduz a intensidade de sentimentos vividos com paixão. As elegantes tulipas se misturam aos delicados crisântemos em tons de vermelho e rosa, criando um visual envolvente e cheio de personalidade. Um presente perfeito para surpreender quem faz seu coração bater mais forte e transformar qualquer ocasião em uma lembrança especial.",
        flowers: ["Crisantêmos", "Rosas", "Tulipas"],
        colors: ["Vermelho","Rosa"],
        price: "R$130,00",
        rating: 4.9,
        image: coracaoArdente
    },

    {
        id: 5,
        category: "event",
        section: "main",
        title: "Promessa de Amor",
        about: "Delicado e sofisticado, este buquê representa a beleza de um sentimento sincero que floresce a cada dia. As clássicas rosas vermelhas se unem à elegância dos lírios brancos e à leveza das gipsofilas, formando uma combinação harmoniosa e cheia de significado. Uma escolha especial para celebrar o amor, a cumplicidade e os momentos que merecem ser eternizados.",
        flowers: ["Rosas", "Lírios", "Gipsófilas" ],
        colors: ["Vermelho", "Branco"],
        price: "R$160,00",
        rating: 4,
        image: promessaDeAmor
    },

    {
        id: 6,
        category: "event",
        section: "main",
        title: "Lindas Declarações",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Crisântemos", "Lírios", "Gipsófilas"],
        colors: ["Rosa", "Vermelho"],
        price: "R$160,00",
        rating: 4.6,
        image: lindasDeclaracoes
    },

    {
        id: 7,
        category: "event",
        section: "main",
        title: "Harmonia Floral",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Crisântemos", "Rosas"],
        colors: ["Rosa"],
        price: "R$200,00",
        rating: 4.6,
        image: harmoniaFloral
    },

    {
        id: 8,
        category: "event",
        section: "main",
        title: "Primeiro Encontro",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Peônias"],
        colors: ["Vermelho", "Rosa"],
        price: "R$180,00",
        rating: 4.6,
        image: primeiroEncontro
    },

    {
        id: 9,
        category: "event",
        section: "main",
        title: "Laços de Amor",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas"],
        colors: ["Rosa", "Branco"],
        price: "R$190,00",
        rating: 4.6,
        image: lacosDeAmor
    },

    {
        id: 10,
        category: "event",
        section: "main",
        title: "Essencia do Amor",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$180,00",
        rating: 4.6,
        image: essenciaDoAmor
    },

    //cards extra do event

    {
        id: 11,
        category: "event",
        section: "extra",
        title: "Arranjo 1",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$250,00",
        rating: 4.6,
        image: arranjo1
    },

    {
        id: 12,
        category: "event",
        section: "extra",
        title: "Arranjo 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$220,00",
        rating: 4.6,
        image: arranjo2
    },

    {
        id: 13,
        category: "event",
        section: "extra",
        title: "Arranjo 3",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$220,00",
        rating: 4.6,
        image: arranjo3
    },

    {
        id: 14,
        category: "event",
        section: "extra",
        title: "Arranjo 4",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$240,00",
        rating: 4.6,
        image: arranjo4
    },

    {
        id: 15,
        category: "event",
        section: "extra",
        title: "Arranjo 5",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$260,00",
        rating: 4.6,
        image: arranjo5
    },

    {
        id: 16,
        category: "event",
        section: "extra",
        title: "Arranjo 6",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$220,00",
        rating: 4.6,
        image: arranjo6
    },

    {
        id: 17,
        category: "event",
        section: "extra",
        title: "Arranjo 7",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$270,00",
        rating: 4.6,
        image: arranjo7
    },

    {
        id: 18,
        category: "event",
        section: "extra",
        title: "Arranjo 8",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$300,00",
        rating: 4.6,
        image: arranjo8
    },

    //cards de arranjos

    {
        id: 19,
        category: "bouquet",
        section: "main",
        title: "Buque 1",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Glicínias", "Orquídeas", "Girassóis", "Rosas", "Lírios"],
        colors: ["Lilás", "Branco", "Rosa", "Amarelo"],
        price: "R$290,00",
        rating: 4.8,
        image: buque11
    },

    {
        id: 20,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Lírios", "Agapantos"],
        colors: ["Azul", "Branco", "Amarelo"],
        price: "R$270,00",
        rating: 4.4,
        image: buque12
    },

    {
        id: 21,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Crisântemos", "Margaridas", "Gipsófilas"],
        colors: ["Rosa", "Roxo", "Lilás", "Branco"],
        price: "R$280,00",
        rating: 4.7,
        image: buque13
    },

    {
        id: 22,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Margaridas", "Petúnias"],
        colors: ["Laranja", "Amarelo", "Branco"],
        price: "R$260,00",
        rating: 4.2,
        image: buque14
    },

    {
        id: 23,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Gérberas", "Gipsófilas"],
        colors: ["Branco", "Lilás", "Rosa"],
        price: "R$270,00",
        rating: 4.6,
        image: buque15
    },

    {
        id: 24,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Cravos", "Crisântemos", "Gérberas"],
        colors: ["Rosa", "Laranja", "Amarelo", "Roxo", "Azul"],
        price: "R$250,00",
        rating: 4.6,
        image: buque16
    },

    {
        id: 25,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Gérberas", "Rosas", "Margaridas"],
        colors: ["Branco", "Rosa"],
        price: "R$210,00",
        rating: 4.6,
        image: buque17
    },

    {
        id: 26,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Gérberas", "Peônias"],
        colors: ["Rosa", "Lilás", "Amarelo"],
        price: "R$160,00",
        rating: 4.6,
        image: buque18
    },

    {
        id: 27,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Peônias", "Gérberas", "Tulipa"],
        colors: ["Laranja", "Lilás", "Amarelo", "Azul"],
        price: "R$180,00",
        rating: 4.6,
        image: buque19
    },

    {
        id: 28,
        category: "bouquet",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Gérberas", "Rosas", "Cravos", "Crisântemos"],
        colors: ["Rosa", "Amarelo", "Lilás", "Branco"],
        price: "R$150,00",
        rating: 4.6,
        image: buque20
    },

    //cards extras dos arranjos
    
    {
        id: 29,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$300,00",
        rating: 4.6,
        image: buquearranjo1
    },

    {
        id: 30,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$290,00",
        rating: 4.6,
        image: buquearranjo2
    },

    {
        id: 31,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$270,00",
        rating: 4.6,
        image: buquearranjo3
    },

    {
        id: 32,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$290,00",
        rating: 4.6,
        image: buquearranjo4
    },

    {
        id: 33,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$270,00",
        rating: 4.6,
        image: buquearranjo5
    },

    {
        id: 34,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$250,00",
        rating: 4.6,
        image: buquearranjo6
    },

    {
        id: 35,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$230,00",
        rating: 4.6,
        image: buquearranjo7
    },

    {
        id: 36,
        category: "bouquet",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$250,00",
        rating: 4.6,
        image: buquearranjo8
    },

    //cards do extra

    {
        id: 37,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$350,00",
        rating: 4.6,
        image: buqueextra1
    },

    {
        id: 38,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$290,00",
        rating: 4.6,
        image: buqueextra2
    },

    {
        id: 39,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$280,00",
        rating: 4.6,
        image: buqueextra3
    },

    {
        id: 40,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$370,00",
        rating: 4.6,
        image: buqueextra4
    },

    {
        id: 41,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$420,00",
        rating: 4.6,
        image: buqueextra5
    },

    {
        id: 42,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$270,00",
        rating: 4.6,
        image: buqueextra6
    },

    {
        id: 43,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$290,00",
        rating: 4.6,
        image: buqueextra7
    },

    {
        id: 44,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$320,00",
        rating: 4.6,
        image: buqueextra8
    },

    {
        id: 45,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$280,00",
        rating: 4.6,
        image: buqueextra9
    },

    {
        id: 46,
        category: "extra",
        section: "main",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$270,00",
        rating: 4.6,
        image: buqueextra10
    },

    //cards extra do extra

    {
        id: 47,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$500,00",
        rating: 4.6,
        image: arranjoextra1
    },

    {
        id: 48,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$350,00",
        rating: 4.6,
        image: arranjoextra2
    },

    {
        id: 49,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$540,00",
        rating: 4.6,
        image: arranjoextra3
    },

    {
        id: 50,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$290,00",
        rating: 4.6,
        image: arranjoextra4
    },

    {
        id: 51,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$410,00",
        rating: 4.6,
        image: arranjoextra5
    },

    {
        id: 52,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$390,00",
        rating: 4.6,
        image: arranjoextra6
    },

    {
        id: 53,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$320,00",
        rating: 4.6,
        image: arranjoextra7
    },

    {
        id: 54,
        category: "extra",
        section: "extra",
        title: "Buque 2",
        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sapiente recusandae corporis autem aliquam laborum molestias quia, odit odio assumenda alias aut optio quidem corrupti asperiores dolore. Fugit, quas sunt.",
        flowers: ["Rosas", "Narcisos", "Copo-de-Leite"],
        colors: ["Rosa", "Vermelho"],
        price: "R$370,00",
        rating: 4.6,
        image: arranjoextra8
    },

]
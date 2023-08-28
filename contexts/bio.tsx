import { termType } from "./terms";

export type contactType = {
    title: string;
    url: string;
}

export const bio: termType = {
    title: 'Sobre o autor',
    description: (
        <>
            Olá! meu nome é Alexander Paschoaletto e eu sou um engenheiro mecatrônico e Desenvolvedor
            web e mobile de 26 anos apaixonado por LEGO. Desde 2012 exponho minhas construções online,
            inicialmente através da extinta mocpages.com e atualmente
            via <span className='bold'>Flickr</span> e <span className='bold'>Instagram</span>.
            Sou construtor principalmente de carros na escala 1:17 ou 14-wide, a depender de como
            preferir chamar, mas também já trabalhei com escala city e outros tipos de construção,
            como personagens de jogos e dirigíveis.
            <br/><br/>
            Participo de exposições nacionais pelo <span className='bold'>LUG Brasil</span> desde 2015.
            Meus carros já tiveram aparições no <span className='bold'>TheLegoCarBlog, Brothers Brick,
            G1</span> e na <span className='bold'>Quatro Rodas</span>, além de em projetos feitos para
            a <span className='bold'>Ford</span> e a <span className='bold'>Jeep</span>. Mas de todos
            eles, aquele pelo qual sou provavelmente mais conhecido não é exatamente um carro e sim
            um avião -  o Embraer A-29 Super Tucano da Esquadrilha da Fumaça, que recebeu divulgação
            da própria FAB e atingiu 10 mil votos de apoio no LEGO Ideas em 2018, rendendo uma
            entrevista <span className='bold'>para a própria LEGO</span>.
            <br/><br/>
            No momento estou em processo de mudança para Portugal para cursar um mestrado na área
            de Sistemas Computacionais Críticos, e para tornar este sonho possível decidi separar
            uma parte da minha coleção de sets e peças para vender e levantar recursos. Com isso,
            ao longo destas páginas você verá alguns kits oficiais, bem como itens exclusivos de minha
            autoria e os termos e condições de aquisição destes produtos.
        </>
    ),
}

export const contacts: contactType[] = [
    {
        title: 'Flickr',
        url: 'https://www.flickr.com/photos/124758953@N07/',
    }, {
        title: 'Instagram',
        url: 'https://www.instagram.com/thatlegoalex/',
    }, {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alexpaschoaletto/',
    }
]
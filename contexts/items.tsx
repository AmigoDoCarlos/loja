import { productPictures } from './pictures';
import { colors } from '../colors';
import { StaticImageData } from 'next/image';

type labelType = { 
    text: string,
    color?: string,
    backgroundColor: string, 
}

export type itemProps = { 
    title: string;
    labels: labelType[];
    description: string | JSX.Element;
    price: number;
    images: string[] | StaticImageData[];
    obs?: string | JSX.Element;
    filters: string[];
}

export const items: itemProps[] = [
    {
        title: 'Mclaren MP4-6',
        labels: [
            {text: 'autoral', backgroundColor: colors.green},
            {text: 'exclusivo', backgroundColor: colors.red}
        ],
        description: <>
                Construído pela primeira vez em 2019 para marcar os 25 anos da morte do
                piloto Ayrton Senna, esta é uma réplica de 546 peças e escala 1:17 do modelo que
                ele usou em 1991 para vencer o GP de Interlagos e sagrar-se tricampeão mundial mais
                tarde no mesmo ano. Recebeu melhorias estruturais desde então, tendo aparecido
                em algumas exposições e se consagrado como um de meus modelos mais icônicos.
                <br/><br/>
                Assim como no carro real, este modelo permite esterçar as rodas e remover o
                nariz e a cobertura principal, dando acesso ao motor. Instruções disponíveis e
                fornecidas via PDF. A última foto mostra uma comparação de tamanho com uma minifigura.
            </>,
        price: 679,
        images: productPictures.mclaren,
        filters: [],
    }, {
        title: 'Arara Canindé',
        labels: [
            {text: 'autoral', backgroundColor: colors.green},
            {text: 'exclusivo', backgroundColor: colors.red}
        ],
        description: <>
                Construí este que é um dos meus animais favoritos em 2015, inicialmente para
                testar minha habilidade com as peças em uma temática fora da minha zona de conforto.
                Acabei gostando muito do resultado, e com o passar do tempo aproveitei novas peças
                adquiridas para melhorar pontos como as asas e a base.  
                <br/><br/>
                Este modelo possui 82 peças e permite mexer a cabeça, asas, caudas e pernas.
                As instruções estão disponíveis e serão fornecidas via PDF. A última foto
                mostra uma comparação de tamanho com uma minifigura.
            </>,
        price: 120,
        images: productPictures.macaw,
        filters: [],
    }, {
        title: 'Conjunto Selva',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
        ],
        description: <>
                Um conjunto que poderia muito bem ter saído de algum Tomb Raider. Composto pela
                minifigura de uma exploradora ('Dino Tracker' da série 12) e seus devidos acessórios
                (seringa, arco e flecha) e três animais (um crocodilo, uma aranha e uma cobra) retirados do kit
                &nbsp;<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?S=60066-1&name=Swamp%20Police%20Starter%20Set&category=%5BTown%5D%5BCity%5D%5BPolice%5D#T=S&O={%22iconly%22:0}' target='_blank'>
                60066-1</a>. Todos os itens estão em condição de novos.
            </>,
        price: 39,
        images: productPictures.miniJungle,
        filters: [],
    }, {
        title: 'Conjunto Heróis',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
        ],
        description: <>
                Conjunto representando um crossover improvável ente Pixar e DC comics. Consiste no Batman com
                acessórios (arma de gancho e cinto de utilidades), e Sr Incrível com acessório (pôster do
                primeiro filme). Ambos estão em condição de novos.
            </>,
        price: 39,
        images: productPictures.miniHeroes,
        filters: [],
    }, {
        title: 'Conjunto pilotos',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
        ],
        description: <>
                Conjunto com dois pilotos de Star Wars, um da resistência rebelde e outro do império.
                Ambos estão em condição de novos e acompanham pistolas laser acessórias.
            </>,
        price: 39,
        images: productPictures.miniPilots,
        filters: [],
    }, {
        title: 'Conjunto guerreiros',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
        ],
        description: <>
                Conjunto com um Wookie e um lorde Sith customizado, este último construído com o corpo, capuz e cabelo da personagem
                &nbsp;<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?M=sw0752#T=S&O={%22iconly%22:0}' target='_blank'>Naare</a> (
                somente a cabeça é de outra minifigura). Ambos estão em condição de novos.
            </>,
        price: 39,
        images: productPictures.miniStarWars,
        filters: [],
    }, {
        title: 'Luke Skywalker',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: <>
                Versão de construção (e bem maior) de um dos personagens principais da saga Star Wars, com 82 peças.
                O kit acompanha o manual de instruções impresso e está em condição de novo, tendo sido montado
                somente uma vez e deixado exposto desde então.
                <br/><br/>
                A última foto mostra uma comparação de tamanho com uma minifigura. De observações, falta apenas uma
                peça da arma laser (<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=11610&idColor=95#T=S&C=95&O={%22color%22:95,%22iconly%22:0}' target='_blank'>11610</a>). 
            </>,
        price: 59,
        images: productPictures.luke,
        filters: [],
    }, {
        title: 'Conjunto Racers',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: <>
                Conjunto de 148 peças com dois carros movidos à fricção da extinta linha Racers, o
                Action Wheelie (vermelho - 8667) e o Race Rig (laranja - 8162).
            </>,
        price: 99,
        images: productPictures.pullback,
        filters: [],
    }, {
        title: 'Conjunto City',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: <>
                Conjunto de 174 peças com carros retirados do set 60128 (Police Pursuit).
                Acompanha manuais impressos originais.
                <br/><br/>
                Os carros estão completos, mas faltam 2 peças acessórias (<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=3069bpx7&idColor=6#T=S&C=6&O={%22color%22:6,%22iconly%22:0}' target='_blank'>3069bpx7</a>),
                e o cofre da caminhonete (<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=4345&idColor=86#T=S&C=86&O={%22color%22:86,%22iconly%22:0}' target='_blank'>4345</a>)
                está disponibilizado em preto em vez de light bluish grey. Sem minifiguras.
            </>,
        price: 139,
        images: productPictures.city,
        filters: [],
    }, {
        title: 'Conjunto Speed Champions',
        labels: [
            {text: 'combo', backgroundColor: colors.acqua},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: <>
                Conjunto com cerca de 330 peças que reúne a Ferrari F40 Competizione
                e o Mclaren 720s, dois carros representativos da época em que a linha Speed
                Champions fazia veículos na escala 6-wide. Os carros estão completos, são
                praticamente novos e acompanham seus respectivos acessórios e manuais impressos,
                mas não contém as minifiguras. 
            </>,
        price: 199,
        images: productPictures.speed,
        filters: [],
    }, {
        title: 'Nitro Muscle',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'completo', backgroundColor: colors.clickBlue},
            {text: 'raro', backgroundColor: colors.pink}
        ],
        description: <>
                Este conjunto completo e praticamente novo foi lançado originalmente em 2007 na linha Racers
                e montado apenas duas vezes. Nunca foi adesivado. Possui mais de 1kg de peso e todas as suas
                598 peças, sendo duas delas os raríssimos motores <a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=46453&idColor=66#T=S&C=66&O={%22color%22:66,%22iconly%22:0}' target='_blank'>46453</a>.  
                O modelo permite levantar a carroceria, expondo o interior do carro, e esterçar as rodas
                dianteiras através de uma manopla no para-choque traseiro.
            </>,
        price: 249,
        images: productPictures.nitro,
        filters: [],
    }, {
        title: 'NASA Apollo Saturn V',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'caixa', backgroundColor: colors.red},
            {text: 'manual', backgroundColor: colors.purple},
        ],
        description: <>
                Lançado pela primeira vez em 2017 com 1969 peças e medindo 1 metro de altura (por este motivo
                também sendo um desafio à parte de fotografar), este kit tem um lugar especial na história da
                LEGO por ter sido o 17° conjunto lançado oficialmente por ela seguindo a linha Ideas (onde
                consumidores comuns podem tentar transformar suas criações em produtos de prateleira).
                <br/><br/>
                É um modelo extremamente elegante e fiel ao foguete original, com os três estágios de separação
                e um espaço interno próprio para fixação do módulo de pouso lunar. Acompanha ainda a cabine de
                reentrada na terra e três miniaturas de astronautas, além de suportes para permitir que o foguete
                seja exposto deitado ao invés de em pé. Na minha opinião, é um dos melhores conjuntos já lançados
                - tão bom que eu nunca tive coragem de desmontar, e olha que geralmente escolho os kits pensando
                nas peças que virão com eles.
                <br/><br/>
                Este produto acompanha a caixa original e o manual impresso. Vem com um astronauta
                extra, mas está faltando a bandeira americana (<a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=3069bpb0587&idColor=12#T=S&C=12&O={%22color%22:12,%22iconly%22:0}' target='_blank'>
                3069bpb0587</a>). Além disso, uma das peças internas está um pouco avariada, conforme mostrado na última foto.
                Mesmo com esta avaria, é possível usá-la na montagem sem nenhum problema (conforme também ilustrado na foto). 
            </>,
        price: 1069,
        images: productPictures.saturn,
        filters: [],
    }, {
        title: 'Mindstorms EV3',
        labels: [
            {text: 'conjunto', backgroundColor: colors.blue},
            {text: 'adesivos', backgroundColor: colors.darkAcqua},
            {text: 'manual', backgroundColor: colors.purple},
            {text: 'peças extras', backgroundColor: colors.pink},
        ],
        description: <>
                Este conjunto representa a terceira (e mais completa, na minha opinião) geração dos kits de robótica educacional da Lego.
                Possui todos os cabos (7 cabos do robô + 1 USB), motores (dois L e um M) sensores (um de toque,
                um de cor e um infravermelho) e o controle remoto funcionando perfeitamente.
                <br/><br/>
                Possui ainda a cartela de adesivos intacta e uma série de itens extras: um segundo controle remoto, da linha Power Functions
                (que comprei por ser compatível e mais ergonômico que o original do EV3), 5 cabos extras e, principalmente, um segundo
                sensor de cor. Isto faz com que este kit seja muito indicado para competições como a Olimpíada Brasileira de Robótica, por exemplo.
                <br/><br/>
                De observações, possui apenas duas peças estéticas faltando (uma <a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=64391&idColor=1#T=S&C=1&O={%22color%22:1,%22iconly%22:0}' target='_blank'>64391</a>
                &nbsp;e uma <a href='https://www.bricklink.com/v2/catalog/catalogitem.page?P=98347&idColor=1#T=S&C=1&O={%22color%22:1,%22iconly%22:0}'>98347</a>).
                Por fim, o carregador de bolinhas está com uma de suas pontas de fixação quebrada (conforme mostrado na última foto),
                mas nada que atrapalhe a montagem. 
            </>,
        price: 1349,
        images: productPictures.mindstorms,
        filters: [],
    },
]


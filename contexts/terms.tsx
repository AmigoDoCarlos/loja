export type termType = {
    title: string;
    description: string | JSX.Element;
}

export const allTerms: termType[] = [
    {
        title: 'Material utilizado',
        description: (
            <>
                Os produtos anunciados aqui, sejam kits ou itens exclusivos de minha autoria,
                são todos construídos com peças da minha coleção pessoal, que ao longo dos
                anos foi usada nos mais de 90 carros, aviões e personagens que construí.
                Algumas peças são novas e foram encomendadas do BrickLink especialmente para a
                montagem dos kits, mas a ampla maioria delas é, de fato, usada. Ainda assim,
                salvo em casos muito específicos e devidamente explicados nos anúncios,
                em hipótese alguma farei o envio das peças quebradas, quebradiças, mordidas,
                muito amareladas ou avariadas de qualquer outro modo.
                <br/><br/>
                Alguns kits podem estar com peças, caixa ou manual faltando. Se este for o caso,
                no anúncio do produto estas faltas estarão devidamente indicadas. Se alguma outra
                peça vier faltando, eu me comprometo a devolver o valor correspondente via Pix
                usando o preço médio no BrickLink brasileiro como referência. No caso de não haver
                nenhum vendedor no Brasil com a peça à venda, aplica-se o valor médio atual do
                mercado internacional. Os valores de referência serão sempre referentes à condição
                used / usado.
                <br/><br/>
                Todos os itens exclusivos desenvolvidos por mim serão acompanhados de um manual
                de instruções virtual, em formato PDF e disponibilizado em um link. O link será
                fornecido via QR code na caixa do produto ou no ato da compra via Whatsapp, e-mail
                ou, se for o caso, chat do e-commerce onde a compra foi feita. É recomendado que
                o comprador baixe o manual assim que tiver acesso a ele.
                <br/><br/>
                Ao comprar um produto por aqui, você concorda com estas condições.
             </>
        ),
    },
    {
        title: 'Preços e pagamentos',
        description: (
            <>
                Os preços praticados serão os seguintes:
                <br/><br/>
                &#x25CD; Até R$ 300: à vista via Pix;<br/>
                &#x25CD; R$301 a R$ 800: à vista via Pix com 3% de desconto, ou parcelado em 2x;<br/> 
                &#x25CD; Acima de R$ 800: à vista via Pix com 5% de desconto, ou parcelado até 3x mensais;<br/>
                <br/>
                As parcelas deverão ser pagas mensalmente também via Pix e o frete fica por conta do comprador.
                O envio pode ser por PAC ou SEDEX, ou alternativamente, pode-se retirar pessoalmente
                em Vinhedo-SP mediante comunicação prévia. Devido à minha circunstância de estar prestes a viajar
                para outro país, esclareço que não poderei aceitar devoluções e/ou reembolsos fora dos casos já
                explicados na seção 'material utilizado', de peças faltantes ou danificadas.
                <br/><br/>
                Ao comprar um produto por aqui, você concorda com estas condições.
            </>
        ),
    },
]
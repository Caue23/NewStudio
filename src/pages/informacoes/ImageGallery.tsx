import Informacoes from './index';

const suasImagens = [
    'caminho/para/imagem1.jpg',
    'caminho/para/imagem2.jpg',
    'caminho/para/imagem3.jpg',
    // Adicione mais imagens conforme necessário
];

const SuaPagina = () => {
    return (
        <div>
            <h1>Sua Página</h1>
            <Informacoes images={suasImagens} />
        </div>
    );
}

export default SuaPagina;

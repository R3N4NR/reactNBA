import "./ItemLista.css";

const ItemLista = ({ id, nome, cores, foto, cidade, ano_criacao, excluirClick, alterarClick }) => {
    return (
        <tr>
            <td className="text-center">{id}</td>
            <td>{nome}</td>
            <td>{cores}</td>
            <td>{cidade}</td>
            <td className="text-center">{ano_criacao}</td>
            <td className="text-center">
                <img src={foto} alt="Emblema da equipe" width="60" height="60" />
            </td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir"
                    onClick={excluirClick}>&#10008;</i>
                <i className="altera text-primary fw-bold ms-2" title="Alterar"
                    onClick={alterarClick}>&#10227;</i>
            </td>
        </tr>
    );
};


export default ItemLista;
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";

const Manutencaotimes = () => {

  const [times, setTimes] = useState([]);
  const { register, handleSubmit, reset } = useForm();


  const obterLista = async () => {
    try {
      const lista = await inAxios.get("times");
      setTimes(lista.data);
      //      console.log(lista.data);
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`);
    }
  };

  // define o método que será executado assim que o componente for renderizado
  useEffect(() => {
    obterLista();
  }, []);

  const filtrarLista = async (campos) => {
    // console.log(campos.palavra)
    try {
      const lista = await inAxios.get(`times/filtro/${campos.palavra}`);
      lista.data.length
        ? setTimes(lista.data)
        : alert("Não há times com a palavra-chave pesquisada...");
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`);
    }
  };

  // const ordenarNome = async (campo) => {
  //   try {
  //     const lista = await inAxios.get(`times/ordem/${campo.palavra}` );
  //     setTimes(lista.data);
  //     //      console.log(lista.data);
  //   } catch (error) {
  //     alert(`Erro... Não foi possível obter os dados: ${error}`);
  //   }
  // };

  // define o método que será executado assim que o componente for renderizado
  // useEffect(() => {
  //   ordenarNome();
  // }, []);

  const excluir = async (id, nome) => {
    if (!window.confirm(`Confirma a exclusão do time "${nome}"?`)) {
      return;
    }
    try {
      await inAxios.delete(`times/${id}`);
      setTimes(times.filter((times) => times.id !== id));
    } catch (error) {
      alert(`Erro... Não foi possível excluir este times: ${error}`);
    }
  };


  const alterar = async (id, descricao, index) => {
    const alterarCores = prompt(`Informe as cores: "${descricao}"`);

    try {
      await inAxios.put(`times/${id}`, { cores: alterarCores });
      const timesAlteracao = [...times];
      timesAlteracao[index].cores = alterarCores;
      setTimes(timesAlteracao);
    } catch (error) {
      alert(`Erro... Não foi possível alterar as cores: ${error}`);
    }
  };


  return (

    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <h4 className="fst-italic mt-3">Manutenção</h4>
        </div>
        <div className="col-sm-5">
          <form onSubmit={handleSubmit(filtrarLista)}>
            <div className="input-group mt-3">
              <input type="text" className="form-control"
                placeholder="Dados" required {...register("palavra")} />
              <input type="submit" className="btn btn-primary botao" value="Pesquisar" />
              <input type="button" className="btn btn-danger" value="Todos"
                onClick={() => { reset({ palavra: "" }); obterLista(); }} />
            </div>
          </form>
        </div>
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID.</th>
            <th >Equipe</th>
            <th>Cores</th>
            <th>Cidade</th>
            <th className="text-center">Fundacao</th>
            <th className="text-center">Emblema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {times.map((times, index) => (
            <ItemLista
              key={times.id}
              id={times.id}
              nome={times.nome}
              cores={times.cores}
              cidade={times.cidade}
              ano_criacao={times.ano_criacao}
              foto={times.foto}
              excluirClick={() => excluir(times.id, times.nome)}
              alterarClick={() => alterar(times.id, times.nome, index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Manutencaotimes;
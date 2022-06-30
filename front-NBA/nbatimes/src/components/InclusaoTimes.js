import { useState } from "react";
import { useForm } from "react-hook-form";
import { inAxios } from "../config_axios";

const InclusaoTimes = () => {
  
  const { register, handleSubmit, reset } = useForm();

  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    
    try {
      const response = await inAxios.post("times", campos);
      setAviso(`Ok! Time inserido ${response.data.id}`);
    } catch (error) {
      setAviso(`Erro... Time não inserido ${error}`);
    }
    // setTimeout: executa o comando após o tempo indicado (em milissegundos)
    setTimeout(() => {
      setAviso("");
    }, 5000);
    // limpa os campos de formulário para uma nova inclusão
    reset({ nome: "", cores: "", foto: "", cidade: "", ano_criacao: "" });
  }

  return (
    <div className="container col-4">
      <h4 className="fst-italic mt-3">Inclusão de Times </h4>
      <form onSubmit={handleSubmit(salvar)}>
      <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="nome">Equipe:</label>
          <input type="text" className="form-control" id="nome"
            required autoFocus {...register("nome")} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="cores">Cores</label>
          <input type="text" className="form-control" id="cores" required
            {...register("cores")} />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="foto">Emblema</label>
          <input type="url" className="form-control" id="foto" required
            {...register("foto")} />
        </div>
        <div className="row mt-2">
        
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="cidade">Cidade</label>
              <input className="form-control" id="cidade" required
                {...register("cidade")} />
            </div>
          
          
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="ano_criacao">Ano de fundação</label>
              <input className="form-control" id="ano_criacao"
                 required {...register("ano_criacao")} />
            
          </div>
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
        <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar" />
      </form>
      <div className={aviso.startsWith("Ok!") ? "alert alert-success" :
                      aviso.startsWith("Erro") ? "alert alert-danger" : 
                      ""}>{aviso}</div>
                      
    </div>

    
  );
}

export default InclusaoTimes;
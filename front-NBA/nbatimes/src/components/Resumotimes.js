import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import {PieChart} from "react-google-charts";
import { inAxios } from "../config_axios";

const Resumotimes = () => {

  const [resumo, setResumo] = useState([]);
  const [grafico, setGrafico] = useState([]);

  const obterDados = async () => {
    try {
      const dadosResumo = await inAxios.get("times/resumo");
      setResumo(dadosResumo.data);

      const dadosGrafico = await inAxios.get("times/ano");

      // cria um array e adiciona a primeira linha
      const arrayGrafico = [["Ano fundacao", "Times no ano"]];


      // percorre cada linha do JSON e adiciona ao array
      dadosGrafico.data.map((dado) =>
        arrayGrafico.push([dado.ano_criacao, dado.total])
      );
      setGrafico(arrayGrafico);

      console.log(dadosResumo.data)
      console.log(dadosGrafico.data)
    } catch (error) {
      alert(`Erro... Não foi possível obter os dados: ${error}`);
    }
  };

  // define o método que será executado assim que o componente for renderizado
  useEffect(() => {
    obterDados();
  }, []);

  return (
    <div className="container">
      <div className="container justify-content-around">
        <h4 className="mt-3">Resumo</h4>
        <span className="btn btn-outline-primary btn-lg me-5">
          <p className="badge bg-danger">
            {resumo.num}
          </p>
          <p>Qtd. Times</p>
        </span>

        <span className="btn btn-outline-primary btn-lg me-5">
          <p className="badge bg-danger">
            {Number(resumo.maior)}
          </p>
          <p>Time mais jovem</p>
        </span>
        <span className="btn btn-outline-primary btn-lg me-5">
          <p className="badge bg-danger">
            {Number(resumo.menor)}
          </p>
          <p>Time mais velho</p>
        </span>
      </div>
      <div className="d-flex justify-content-center">
        <Chart
          width={1000}
          height={420}
          chartType="ColumnChart"
          loader={<div>Carregando Gráfico...</div>}
          data={grafico}
          options={{
            title: "Quantidade de times por ano",
            chartArea: { width: "80%" },
            hAxis: { title: "Ano de fundação", format: "", titleTextStyle: "string" },
            vAxis: { title: "Quantidade", format: "" },
            legend: { position: "none" },
          }}
        />
        
      </div>
    </div>
  );
};

export default Resumotimes;

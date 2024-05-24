export default function TabContent({ vtoData, activeTab }) {
  return (
    <div className="tab__container ">
      <div className="tab__content">
          <p> {vtoData[activeTab].fact}</p>
            { vtoData[activeTab].result && 
              <div className="d-flex justify-content-between text-center">
                <img src={vtoData[activeTab].image} alt="Pet" />
                <img src={vtoData[activeTab].result} alt="Pet" />
              </div>}
            { !vtoData[activeTab].result && 
            <input type="file" />}
            { !vtoData[activeTab].result && 
            <img src={vtoData[activeTab].image} alt="Pet" />}
      </div>
    </div>
  );
}
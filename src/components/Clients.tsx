import { clientsDataArr } from '../util/importedImages';

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients-container">
        {clientsDataArr.map((item: string, i: number) => (
          <div className="client" key={item + i}>
            <img src={item} alt="Client" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

function Sell() {
  interface Stock {
    ticker: string;
    name: string;
    quantity: number;
    price: number;
  }

  const stocks: Stock[] = [
    { name: "a", ticker: "a", quantity: 0, price: 4 },
    { name: "b", ticker: "b", quantity: 1, price: 3 },
    { name: "c", ticker: "c", quantity: 2, price: 2 },
    { name: "d", ticker: "d", quantity: 3, price: 1 },
    { name: "e", ticker: "e", quantity: 4, price: 5 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">Sell</h1>
      <table className="table-auto border-collapse border-spacing-6 text-center">
        <thead>
          <tr className="text-lg">
            <th className="px-6">Stock</th>
            <th className="px-6">Ticker</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => (
            <tr
              key={stock.ticker}
              id={stock.ticker}
              className={`${i % 2 ? "bg-blue-600/50" : "bg-blue-300/50"}`}
            >
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Buy() {
  interface Stock {
    ticker: string;
    name: string;
    quantity: number;
    price: number;
  }

  const stocks: Stock[] = [
    { name: "a", ticker: "a", quantity: 0, price: 4 },
    { name: "b", ticker: "b", quantity: 1, price: 3 },
    { name: "c", ticker: "c", quantity: 2, price: 2 },
    { name: "d", ticker: "d", quantity: 3, price: 1 },
    { name: "e", ticker: "e", quantity: 4, price: 5 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">Buy</h1>
      <table className="table-auto border-collapse border-spacing-6 text-center">
        <thead>
          <tr className="text-lg">
            <th className="px-6">Stock</th>
            <th className="px-6">Ticker</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => (
            <tr
              key={stock.ticker}
              id={stock.ticker}
              className={`${i % 2 ? "bg-blue-600/50" : "bg-blue-300/50"}`}
            >
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Holding() {
  interface Stock {
    ticker: string;
    name: string;
    quantity: number;
    price: number;
  }

  const stocks: Stock[] = [
    { name: "a", ticker: "a", quantity: 0, price: 4 },
    { name: "b", ticker: "b", quantity: 1, price: 3 },
    { name: "c", ticker: "c", quantity: 2, price: 2 },
    { name: "d", ticker: "d", quantity: 3, price: 1 },
    { name: "e", ticker: "e", quantity: 4, price: 5 },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">Holding</h1>
      <table className="table-auto border-collapse border-spacing-6 text-center">
        <thead>
          <tr className="text-lg">
            <th className="px-6">Stock</th>
            <th className="px-6">Ticker</th>
            <th className="px-6">Quantity</th>
            <th className="px-6">Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, i) => (
            <tr
              key={stock.ticker}
              id={stock.ticker}
              className={`${i % 2 ? "bg-blue-600/50" : "bg-blue-300/50"}`}
            >
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>${stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Market() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h1 className="text-lg">
          <strong>Wallet:</strong> ${500}
        </h1>
        <h1 className="text-lg">
          <strong>Net Worth:</strong> ${500}
        </h1>
      </div>
      <div className="flex gap-12 justify-center">
        <Buy />
        <Sell />
      </div>
      <div className="flex justify-center">
        <Holding />
      </div>
    </div>
  );
}

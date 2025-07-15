interface MarketProps {
  name: string;
  ticker: string;
  dividend: number;
  starting: number;
  low: number;
  med: number;
  high: number;
  current: number;
}

const market: MarketProps[] = [
  {
    name: "Evanston Electric",
    ticker: "EE",
    dividend: 5,
    starting: 95,
    low: 12,
    med: 10,
    high: 8,
    current: 95,
  },
  {
    name: "Alberta Energy",
    ticker: "ABE",
    dividend: 10,
    starting: 125,
    low: 16,
    med: 12,
    high: 10,
    current: 125,
  },
  {
    name: "Stuart Solar",
    ticker: "SLR",
    dividend: 6,
    starting: 90,
    low: 12,
    med: 10,
    high: 8,
    current: 90,
  },
  {
    name: "Irving Power",
    ticker: "IRV",
    dividend: 2,
    starting: 30,
    low: 4,
    med: 3,
    high: 2,
    current: 30,
  },
  {
    name: "Shetland Bank",
    ticker: "SHB",
    dividend: 3,
    starting: 45,
    low: 6,
    med: 5,
    high: 4,
    current: 45,
  },
  {
    name: "Sherman Steel",
    ticker: "SHS",
    dividend: 2,
    starting: 35,
    low: 4,
    med: 3,
    high: 2,
    current: 35,
  },
  {
    name: "Brown Beverage",
    ticker: "BEV",
    dividend: 3,
    starting: 50,
    low: 6,
    med: 5,
    high: 4,
    current: 50,
  },
  {
    name: "Garden Health",
    ticker: "GDN",
    dividend: 3,
    starting: 65,
    low: 6,
    med: 5,
    high: 4,
    current: 65,
  },
  {
    name: "Founders Pharma",
    ticker: "FP",
    dividend: 3,
    starting: 40,
    low: 6,
    med: 5,
    high: 4,
    current: 40,
  },
  {
    name: "Rudy Insurance",
    ticker: "RUD",
    dividend: 7,
    starting: 90,
    low: 12,
    med: 10,
    high: 8,
    current: 90,
  },
  {
    name: "McGinnis Motors",
    ticker: "MM",
    dividend: 2,
    starting: 25,
    low: 4,
    med: 3,
    high: 2,
    current: 25,
  },
  {
    name: "Darkside Digital",
    ticker: "DA",
    dividend: 4,
    starting: 100,
    low: 12,
    med: 10,
    high: 8,
    current: 100,
  },
  {
    name: "Lawnview Tek",
    ticker: "LA",
    dividend: 3,
    starting: 65,
    low: 6,
    med: 5,
    high: 4,
    current: 65,
  },
  {
    name: "Alpha Solutions",
    ticker: "ALP",
    dividend: 3,
    starting: 75,
    low: 6,
    med: 5,
    high: 4,
    current: 75,
  },
  {
    name: "Juno Services",
    ticker: "JUNO",
    dividend: 2,
    starting: 45,
    low: 6,
    med: 5,
    high: 4,
    current: 45,
  },
  {
    name: "Newmoon Aero",
    ticker: "NEW",
    dividend: 6,
    starting: 120,
    low: 16,
    med: 12,
    high: 10,
    current: 120,
  },
  {
    name: "Armada Defense",
    ticker: "ARM",
    dividend: 3,
    starting: 60,
    low: 6,
    med: 5,
    high: 4,
    current: 60,
  },
  {
    name: "Flyer Infinity",
    ticker: "FLY",
    dividend: 6,
    starting: 120,
    low: 16,
    med: 12,
    high: 10,
    current: 120,
  },
  {
    name: "Bird Air",
    ticker: "BAIR",
    dividend: 2,
    starting: 35,
    low: 4,
    med: 3,
    high: 2,
    current: 35,
  },
  {
    name: "Liberty Logistix",
    ticker: "LB",
    dividend: 5,
    starting: 90,
    low: 12,
    med: 10,
    high: 8,
    current: 90,
  },
];

export default function Market() {
  return (
    <div className="flex justify-center mb-12">
      <table className="table-auto border-collapse border-spacing-6 text-center">
        <thead>
          <tr className="text-xl">
            <th className="px-6">Stock</th>
            <th className="px-6">Ticker</th>
            <th className="px-6">Dividend</th>
            <th className="px-6">Starting Price</th>
            <th className="px-6">2-5</th>
            <th className="px-6">6-8</th>
            <th className="px-6">9-12</th>
            <th className="px-6">Current Price</th>
          </tr>
        </thead>
        <tbody>
          {market.map((stock, i) => (
            <tr
              key={stock.ticker}
              id={stock.ticker}
              className={`${i % 2 ? "bg-blue-600/50" : "bg-blue-300/50"}`}
            >
              <td className="text-left py-2 px-3">{stock.name}</td>
              <td className="font-bold">{stock.ticker}</td>
              <td>{stock.dividend}</td>
              <td>{stock.starting}</td>
              <td>{stock.low}</td>
              <td>{stock.med}</td>
              <td>{stock.high}</td>
              <td className="font-bold">{stock.current}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Mock data
const mockData = [
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
  { id: 1, name: 'Item 1', price: 100 },
  { id: 2, name: 'Item 2', price: 200 },
];

const Grid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-3 h-full w-full">
      {mockData.map(item => (
        <div key={item.id} className="flex justify-center items-center w-full h-full py-3">
          <div className="w-44 h-48 bg-listing text-white flex rounded-lg">
            <div className="w-32 h-32 bg-header rounded-lg">

            </div>
            <div>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;

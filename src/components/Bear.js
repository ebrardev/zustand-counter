import useBearStore from "../store";

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  return  (
    <div>
  <button onClick={increasePopulation}>one up</button>
    <button onClick={decreasePopulation}>one down</button>
    </div>
    )
}

export { BearCounter, Controls }; // İçe aktarılabilir bileşenleri doğru şekilde ekliyoruz

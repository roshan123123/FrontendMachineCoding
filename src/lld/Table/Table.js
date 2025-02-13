import { useMemo, useState } from 'react';
import data from './data';
import './index.css';
export const TableContainer = () => {
  return <Table data={data} />;
};
export default TableContainer;
const sortKeys = {
  id: 'id',
  name: 'name',
  age: 'age',
  occupation: 'occupation',
};

const Table = ({ data }) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSort, setActiveSort] = useState({ order: 'asc', sortBy: 'id' });

  const handleSort = (sortKey) => {
    console.log(sortKey);
    if (sortKey == activeSort.sortBy) {
      if (activeSort.order == 'asc') {
        setActiveSort({ order: 'dsc', sortBy: sortKey });
      } else {
        setActiveSort({ order: 'asc', sortBy: sortKey });
      }
    } else {
      setActiveSort({ order: 'asc', sortBy: sortKey });
    }
  };

  const pageCount =
    data.length % pageSize == 0
      ? data.length / pageSize
      : parseInt(data.length / pageSize) + 1;

  let dataTOrender = useMemo(() => {
    return sortData(data.slice(), activeSort);
  }, [activeSort.order, activeSort.sortBy]);

  dataTOrender = dataTOrender.slice(
    pageSize * (currentPage - 1),
    pageSize * (currentPage - 1) + pageSize
  );

  return (
    <>
      <h1>table heading</h1>
      <table>
        <thead>
          <td onClick={() => handleSort(sortKeys['id'])}>Id</td>
          <td onClick={() => handleSort(sortKeys['name'])}>Name</td>
          <td onClick={() => handleSort(sortKeys['age'])}>Age</td>
          <td onClick={() => handleSort(sortKeys['occupation'])}>occupation</td>
        </thead>
        <tbody>
          {/* generalise this so that the table becomes geneic */}
          {dataTOrender.map((rowData) => (
            <tr id={rowData.id}>
              <td>{rowData.id}</td>
              <td>{rowData.name}</td>
              <td>{rowData.age}</td>
              <td>{rowData.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer
        setPageSize={setPageSize}
        pageSize={pageSize}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

const Footer = ({
  pageSize,
  setPageSize,
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  const handleSelectChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePageNumberClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="footer">
      <label>Results per page</label>
      <select value={pageSize} onChange={handleSelectChange}>
        <option value={5}>5 perPAge</option>
        <option value={10}>10 perPAge</option>
        <option value={25}>25 perPAge</option>
      </select>

      <div className="pagination">
        <button onClick={prevHandler} disabled={currentPage == 1}>
          prev
        </button>
        {new Array(pageCount).fill(0).map((ele, index) => (
          <button
            style={{
              backgroundColor: currentPage === index + 1 ? 'red' : '',
            }}
            onClick={() => handlePageNumberClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextHandler} disabled={currentPage == pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

const sortData = (sortedData, activeSort) => {
  if (
    activeSort.sortBy === sortKeys.name ||
    activeSort.sortBy === sortKeys.name
  ) {
    const data = sortedData.sort((a, b) => {
      if (activeSort.order == 'asc') {
        return a[activeSort.sortBy].localeCompare(b[activeSort.sortBy]);
      } else {
        return b[activeSort.sortBy].localeCompare(a[activeSort.sortBy]);
      }
    });
    return data;
  }
  const data = sortedData.sort((a, b) => {
    if (activeSort.order == 'asc') {
      return a[activeSort.sortBy] - b[activeSort.sortBy];
    } else {
      return b[activeSort.sortBy] - a[activeSort.sortBy];
    }
  });
  return data;
};

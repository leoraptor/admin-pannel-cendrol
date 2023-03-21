import { Pagination } from "antd";

const CustomPagination = ({ PerPage, TotalCount, handleChangePage, Page }) => {
  return (
    <div className="d-flex justify-content-end">
      <Pagination
        onChange={handleChangePage}
        total={TotalCount}
        showTotal={(total, range) =>
          `Showing ${range[0]} to ${range[1]} of ${total} Results`
        }
        current={parseInt(Page)}
      />
    </div>
  );
};

export default CustomPagination;

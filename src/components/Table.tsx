import {
  Table as TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type TableProps = {
  caption: string;
  heads: { [key: string]: string };
  rows: { [key: string]: any }[];
};

const Table = ({ caption, heads, rows }: TableProps) => {
  const headKeys = Object.keys(heads);
  const headValues = Object.values(heads);

  return (
    <>
      <p
        aria-label="table caption"
        className="border border-table-bg border-b-0 rounded-t-lg flex items-center p-2 font-semibold bg-table-bg h-12"
      >
        {caption}
      </p>
      <div className="border rounded-b-lg overflow-hidden">
        <TableContainer>
          <TableHeader>
            <TableRow>
              {headValues.map((headValue, index) => (
                <TableHead key={index} className="border-r last:border-r-0 p-2">
                  {headValue}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headKeys.map((key) => (
                  <TableCell key={key} className="border-r last:border-r-0 p-2">
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </div>
    </>
  );
};

export default Table;

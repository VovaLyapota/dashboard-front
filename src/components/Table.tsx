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
        className="flex h-12 items-center rounded-t-lg border border-b-0 border-table-bg
          bg-table-bg p-2 font-semibold"
      >
        {caption}
      </p>
      <div className="overflow-hidden rounded-b-lg border">
        <TableContainer>
          <TableHeader>
            <TableRow>
              {headValues.map((headValue, index) => (
                <TableHead key={index} className="border-r p-2 last:border-r-0">
                  {headValue}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {headKeys.map((key) => (
                  <TableCell key={key} className="border-r p-2 last:border-r-0">
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

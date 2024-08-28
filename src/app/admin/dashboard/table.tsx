import { IconPencil } from "@tabler/icons-react";
import Link from "next/link";

const Table = <T extends string, K extends string>({
  tableName,
  columnNames,
  connectionNames,
  columnValues,
}: {
  tableName: string;
  columnNames: T[];
  connectionNames: K[];
  columnValues: ({ id: number } & {
    [key in T]: number | string | Date | null;
  } & {
    [key in K]?: { id: number }[];
  })[];
}) => {
  return (
    <div>
      <div className="flex">
        <p>{tableName}</p>
        <Link href={`/admin/dashboard/${tableName}`}>Novo</Link>
      </div>
      <div className="overflow-scroll max-h-[500px]">
        <table className="min-w-[2000px] border-collapse border-2 border-black">
          <thead>
            <tr>
              <th className="bg-[#FF7506] text-white border-2 border-black">
                editar
              </th>
              {columnNames.map((column, index) => {
                return (
                  <th
                    className="bg-[#FF7506] text-white border-2 border-black"
                    scope="col"
                    key={index}
                  >
                    {column}
                  </th>
                );
              })}
              {connectionNames.map((column, index) => {
                return (
                  <th
                    className="bg-[#FF7506] text-white border-2 border-black"
                    scope="col"
                    key={index}
                  >
                    {column}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {columnValues.map((values, index) => {
              return (
                <tr key={index}>
                  <td className="border-2 border-black ">
                    <Link
                      href={`/admin/dashboard/${tableName}?id=${values.id}`}
                      className="flex justify-center"
                    >
                      <IconPencil stroke={2} />
                    </Link>
                  </td>
                  {columnNames.map((name, index) => {
                    let value: number | string | Date | null = values[name];
                    if (value instanceof Date) {
                      value = value.toString();
                    }

                    return (
                      <td
                        className="border-2 border-black max-w-[50em] text-ellipsis overflow-clip text-nowrap"
                        key={index}
                      >
                        {value}
                      </td>
                    );
                  })}
                  {connectionNames.map((name, index) => {
                    return (
                      <td key={index} className="border-2 border-black">
                        {values[name].map((value, valueIndex) => {
                          return <span key={valueIndex}>{value.id}, </span>;
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Table };

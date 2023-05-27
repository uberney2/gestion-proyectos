import React, { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';
import {
  StyledDataTableContainer,
  StyledDataTable,
  StyledEmptyMessage,
  StyledDataTableTr,
  StyledDataTableTd,
} from './data-table.styles';
import Pagination from '../pagination/pagination';
import SvgKeyboardArrowDown from '../icon-svg/KeyboardArrowDown';
import { SortableDataTableHeader } from './sortable-header/sortable-data-table-header';
import GenericInput from '../inputs/generic-input/generic-input';

interface DataTableProps<T> {
  items: T[];
  columns: ColumnDef<T>[];
  pagination: boolean;
  postsPerPage: number;
  pagesLimit?: number;
  emptyMessage?: string;
}

export function DataTable<T>({
  items,
  columns,
  pagination,
  postsPerPage,
  pagesLimit,
  emptyMessage,
}: DataTableProps<T>) {
  const totalPosts = items.length;
  const [, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: items,
    columns,
    state: {
      columnFilters,
      sorting,
    },
    initialState: {
      pagination: { pageIndex: 0, pageSize: postsPerPage },
    },
    onSortingChange: setSorting,
    enableColumnFilters: true,
    enableFilters: true,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    sortDescFirst: false,
  });

  const onPageChange = ({ currentPage: current }: { currentPage: number }) => {
    setCurrentPage(current);
    table.setPageIndex(current - 1);
  };

  return (
    <StyledDataTableContainer>
      <StyledDataTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledDataTableTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div>
                      <div onClick={header.column.getToggleSortingHandler()}>
                        <SortableDataTableHeader
                          className={header.column.getIsSorted() as string}
                          isSortable={header.column.getCanSort()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </SortableDataTableHeader>
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <GenericInput
                            value={
                              (header.column.getFilterValue() ?? '') as string
                            }
                            onChange={(value) =>
                              header.column.setFilterValue(value.target.value)
                            }
                            placeholder={`Filter By ${header.column.columnDef.header}`}
                          />
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              ))}
            </StyledDataTableTr>
          ))}
        </thead>
        {items.length > 0 ? (
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledDataTableTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledDataTableTd>
                ))}
              </tr>
            ))}
          </tbody>
        ) : (
          <StyledEmptyMessage>{emptyMessage}</StyledEmptyMessage>
        )}
        {pagination && totalPosts > postsPerPage && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            onPageChange={onPageChange}
            pagesLimit={pagesLimit}
          />
        )}
      </StyledDataTable>
    </StyledDataTableContainer>
  );
}

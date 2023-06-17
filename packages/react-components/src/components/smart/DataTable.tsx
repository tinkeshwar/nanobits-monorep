import { FormCheck, Table, TableBody, TableDataCell, TableHead, TableHeaderCell, TableRow } from '@nanobits/react-ui'
import React, { forwardRef } from 'react'

import { DataPaginate } from './DataPagination'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface DataTableProps {
    className?: string,
    columns: object,
    indexing?: boolean,
    checking?: boolean,
    primary?: string[],
    data: any,
    meta?: any
    psize?: 'lg'|'sm',
    palign?: 'start'|'center'|'end',
    onPageUpdate?: (page: number) => void
    onCheckAll?: (checkedItems: object[]) => void
    onRowClick?: (selectedItems: object) => void
}

export const DataTable = forwardRef<HTMLTableElement, DataTableProps>((
  {
    className,
    columns,
    indexing,
    checking,
    primary,
    data,
    meta,
    psize,
    palign,
    onPageUpdate,
    onCheckAll,
    onRowClick
  },
  ref
) => {

  const _className = classNames(
    'mb-0',
    'n-custom-data-table-class',
    className,
  )

  const handlePagination = (page: number) => {
    if(onPageUpdate) return onPageUpdate(page)
    throw new Error('Please add prop `onPageUpdate`.')
  }

  const handleDoubleClick = (item: any) => {
    if(onRowClick){
      let primaryKey = {} as any
      if(primary){
        primary.forEach(key => {
          primaryKey[key] = item[key]
        })
      }
      return onRowClick(primaryKey)
    }
    throw new Error('Please add prop `onRowClick`.')
  }

  const onBulkCheck = (event: React.MouseEvent<HTMLInputElement>) => {
    if(onCheckAll){
      if(event.currentTarget.checked){} else {}
    }
    throw new Error('Please add prop `onCheckAll`.')
  }

  return (
    <React.Fragment>
      <Table ref={ref} striped className={_className}>
        <TableHead color={'primary'}>
          <TableRow>
            {checking && <TableHeaderCell scope={'col'}><FormCheck onClick={onBulkCheck} label={'All'}/></TableHeaderCell>}
            {indexing && <TableHeaderCell scope={'col'}>{'Sr#'}</TableHeaderCell>}
            {columns && Object.entries(columns).map(([column, value]) => {
              return <TableHeaderCell key={column} scope={'col'}>{value}</TableHeaderCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((item: any, index: number) => {
            return (
              <TableRow key={`data-${index}`}>
                {checking && <TableDataCell><FormCheck/></TableDataCell>}
                {indexing && <TableDataCell>{(index+1)+((meta.page-1)*meta.per_page)}</TableDataCell>}
                {columns && Object.entries(columns).map(([column]) => {
                  return <TableDataCell onDoubleClick={()=>handleDoubleClick(item)} key={`data-${index}-${column}`}>{item[column]}</TableDataCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {(meta.pages>1) && <DataPaginate
        onPageChange={handlePagination}
        meta={meta}
        className={'mb-0 mt-3'}
        align={palign}
        size={psize}
      />}
    </React.Fragment>
  )
})

DataTable.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.any,
  indexing: PropTypes.bool,
  checking: PropTypes.bool,
  primary: PropTypes.any,
  data: PropTypes.any,
  meta: PropTypes.any,
  psize: PropTypes.oneOf(['sm', 'lg']),
  palign: PropTypes.oneOf(['start', 'center', 'end']),
  onPageUpdate: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func,
  onRowClick: PropTypes.func
}

DataTable.displayName = 'DataTable'
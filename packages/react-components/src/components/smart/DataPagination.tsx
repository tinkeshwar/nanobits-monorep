import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Pagination, PaginationItem } from 'nanobits-react-ui'
import { PaginationProps } from 'nanobits-react-ui/components/pagination/Pagination'

export interface MetaInterfaceProps {
    total: number,
    page: number,
    per_page: number,
    pages: number
}

export interface DataPaginateProps extends PaginationProps {
    meta: MetaInterfaceProps
    className?: string
    limit?: number
    previousLabel?: string|React.ReactNode
    nextLabel?: string|React.ReactNode
    firstLabel?: string|React.ReactNode
    lastLabel?: string|React.ReactNode
    onPageChange: (page: number) => void
}

export const DataPaginate = forwardRef<HTMLUListElement, DataPaginateProps>((
  {
    meta,
    className,
    limit = 5,
    firstLabel = <React.Fragment>&laquo;</React.Fragment>,
    previousLabel = <React.Fragment>&lsaquo;</React.Fragment>,
    nextLabel = <React.Fragment>&rsaquo;</React.Fragment>,
    lastLabel = <React.Fragment>&raquo;</React.Fragment>,
    onPageChange,
    ...rest
  },
  ref
)=> {
  const _className = classNames(
    'n-custom-data-paginate-class',
    className,
  )

  const showDots = (() => {
    return limit > 4 && limit < meta.pages
  })()
  const maxPrevItems = (() => {
    return Math.floor((limit - 1) / 2)
  })()
  const maxNextItems = (() => {
    return Math.ceil((limit - 1) / 2)
  })()
  const beforeDots = (() => {
    return showDots && meta.page > maxPrevItems + 1 as any
  })()
  const afterDots = (() => {
    return showDots && meta.page < meta.pages - maxNextItems as any
  })()
  const computedLimit = (() => {
    return limit - afterDots - beforeDots
  })()
  const range = (() => {
    return meta.page + maxNextItems
  })()
  const lastItem = (() => {
    return range >= meta.pages ? meta.pages : range - afterDots
  })()
  const itemsAmount = (() => {
    return meta.pages < computedLimit ? meta.pages : computedLimit
  })()
  const items = (() => {
    if (meta.page - maxPrevItems <= 1) {
      return Array.from({
        length: itemsAmount
      }, (_v, i) => i + 1).filter((i) => !isNaN(i))
    } else {
      return Array.from({
        length: itemsAmount
      }, (_v, i) => lastItem - i ).filter((i) => !isNaN(i)).reverse()
    }
  })()

  return (
    <Pagination ref={ref} {...rest} className={_className} aria-label={'Pagination'}>
      {(firstLabel && meta.page > 1) && <PaginationItem onClick={()=>onPageChange(1)} aria-label="Go to first page">{firstLabel}</PaginationItem>}
      {(previousLabel && meta.page > 1) && <PaginationItem onClick={()=>onPageChange(meta.page-1)} aria-label="Go to previous page">{previousLabel}</PaginationItem>}
      { beforeDots && <PaginationItem>{'..'}</PaginationItem>}
      { items.map(i => <PaginationItem onClick={()=>onPageChange(i)} key={`pagination-${i}`} active={meta.page === i}>{i}</PaginationItem>)}
      { afterDots && <PaginationItem>{'..'}</PaginationItem>}
      {(nextLabel && meta.pages > meta.page) && <PaginationItem onClick={()=>onPageChange(meta.page+1)} aria-label="Go to next page">{nextLabel}</PaginationItem>}
      {(lastLabel && meta.pages > meta.page) && <PaginationItem onClick={()=>onPageChange(meta.pages)} aria-label="Go to last page">{lastLabel}</PaginationItem>}
    </Pagination>
  )
})

DataPaginate.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.any,
  previousLabel: PropTypes.string,
  nextLabel: PropTypes.string,
  firstLabel: PropTypes.string,
  lastLabel: PropTypes.string,
  limit: PropTypes.number,
  onPageChange: PropTypes.func.isRequired
}

DataPaginate.displayName = 'DataPaginate'
import styles from './styles.module.css';

import type { FolderModel, FolderPathSegmentModel } from '../../types/folder.type';

type NavigatorProps = {
  actualFolder: FolderModel
  handleChangeFolder: (id: string) => Promise<void>
}

function Navigator({ actualFolder, handleChangeFolder }: NavigatorProps) {

  const breadcrumbContent = breadcrumbList(actualFolder.path.segments, handleChangeFolder)

  return (
    <section className={styles.breadcrumb} >
      {breadcrumbContent}
    </section>
  )
}

function breadcrumbItem(segment: FolderPathSegmentModel, onClick: () => void) {

  return (
    <li key={segment.id} className={styles.breadcrumb__list__item} >
      <div>
        <button onClick={onClick}>{segment.name}</button>
        <span>{">"}</span>
      </div>
    </li>
  )

}

function lastBreacrumbItem(segment: FolderPathSegmentModel) {

  return (
    <li key={segment.id} className={styles.breadcrumb__list__item}>
      <span className={styles.breadcrumb__list__item__last}>
        {segment.name}
      </span>
    </li>
  )

}

function breadcrumbList(segments: FolderPathSegmentModel[], handleChangeFolder: (id: string) => Promise<void>) {

  const reversedSegments = [...segments].reverse();

  console.log(reversedSegments);

  if (reversedSegments.length < 1)
    return <ol></ol>;

  if (reversedSegments.length === 1)
    return <ol>{lastBreacrumbItem(reversedSegments[0])}</ol>;

  const firstsSegments = reversedSegments.slice(0, -1)
  const lastSegment = reversedSegments.at(-1)

  const firstsItems = firstsSegments.map(segment => breadcrumbItem(segment, () => handleChangeFolder(segment.id)))
  const lastItem = lastSegment ? lastBreacrumbItem(lastSegment) : null

  return (
    <ol className={styles.breadcrumb__list}>
      {firstsItems}
      {lastItem}
    </ol>
  )

}

export default Navigator
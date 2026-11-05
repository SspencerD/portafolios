export interface TimelineEvent { date: string; title: string; description: string; place: string }
export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return <ol className="timeline">{events.map(event => <li key={`${event.place}-${event.date}`}>
    <article className="timeline-card"><p className="date">{event.date}</p><h3>{event.title}</h3>
      <p className="company">{event.place}</p><p>{event.description}</p></article>
  </li>)}</ol>;
}

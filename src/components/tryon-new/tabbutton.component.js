export default function TabButtons({ vtoData, activeTab, setActiveTab }) {
  return (
    <div className="tab__header">
      {vtoData.map((item, index) => (
        <li
          // Adding an active class where the current index matches the currently active tab
          className={`${index === activeTab && "active-tab"} tab__button`}
          key={item.title}
          onClick={() => setActiveTab(index)}>
          {item.title}
        </li>
      ))}
    </div>
  );
}
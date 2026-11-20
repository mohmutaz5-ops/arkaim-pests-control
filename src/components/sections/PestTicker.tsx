import "./PestTicker.css";

const TICKER_ITEMS = [
  "مكافحة الصراصير",
  "مكافحة النمل الأبيض",
  "مكافحة الفئران والقوارض",
  "مكافحة البق",
  "تغطية الساحل الشمالي",
  "ضمان سنة كاملة",
  "تقنية ألمانية",
  "خدمة 24 ساعة",
];

const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

export function PestTicker() {
  return (
    <div className="overflow-hidden bg-foreground/90 py-3.5">
      <div className="pest-ticker-track flex gap-8 whitespace-nowrap text-background text-sm font-bold">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

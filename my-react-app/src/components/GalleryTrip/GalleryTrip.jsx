import React from "react";

const items = [
  // LEFT
  {
    id: "a",
    src: "/Gallery1.png",
    cls: "col-start-1 row-start-1 row-span-2",
  },
  {
    id: "d",
    src: "/Gallery2.png",
    cls: "col-start-1 row-start-3 row-span-3",
  },
  {
    id: "g",
    src: "/Gallery3.png",
    cls: "col-start-1 row-start-6 row-span-3", // ⬅ растянули
  },

  // MIDDLE (шире)
  {
    id: "b",
    src: "/Gallery4.png",
    cls: "col-start-2 row-start-1 row-span-3",
  },
  {
    id: "e",
    src: "/Gallery5.png",
    cls: "col-start-2 row-start-4 row-span-3",
  },
  {
    id: "h",
    src: "/Gallery6.png",
    cls: "col-start-2 row-start-7 row-span-2",
  },

  // RIGHT
  {
    id: "c",
    src: "/Gallery7.png",
    cls: "col-start-3 row-start-1 row-span-2",
  },
  {
    id: "f",
    src: "/Gallery8.png",
    cls: "col-start-3 row-start-3 row-span-3",
  },
  {
    id: "i",
    src: "/Gallery9.png",
    cls: "col-start-3 row-start-6 row-span-3", // ⬅ растянули
  },
];

export default function GalleryTrip() {
  return (
    <div className="mx-auto container px-4 py-6">
      <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
        <div
          className="
            grid gap-4
            sm:grid-cols-[1fr_1.25fr_1fr]
            auto-rows-[100px]
          "
        >
          {items.map((it) => (
            <figure
              key={it.id}
              className={`relative overflow-hidden rounded-2xl bg-zinc-100 shadow-sm ring-1 ring-black/5 ${it.cls}`}
            >
              <img
                src={it.src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useMemo, useState } from "react";

export default function LeadFormCard() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });

  const maxLen = 300;
  const left = useMemo(() => maxLen - (form.comment?.length || 0), [form.comment]);

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // тут твоя отправка (fetch/axios)
    console.log(form);
  };

  return (
    <section className="w-full bg-zinc-100 h-full">
      <div className="px-4">
        <div className="rounded-[20px] bg-[#3FA3D8] p-8 shadow-sm">
          {/* Top */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Оставь заявку
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/85 md:text-right">
              И мы свяжемся, чтобы рассказать детали <br className="hidden md:block" />
              и закрепить цену до повышения
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="mt-7 space-y-5">
            {/* row inputs */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                value={form.name}
                onChange={onChange("name")}
                placeholder="Имя"
                className="
                  h-14 w-full rounded-full bg-white px-6 text-[15px]
                  outline-none ring-1 ring-black/5
                  placeholder:text-zinc-400
                  focus:ring-2 focus:ring-white/70
                "
              />
              <input
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="Телефон"
                inputMode="tel"
                className="
                  h-14 w-full rounded-full bg-white px-6 text-[15px]
                  outline-none ring-1 ring-black/5
                  placeholder:text-zinc-400
                  focus:ring-2 focus:ring-white/70
                "
              />
            </div>

            {/* textarea */}
            <div className="relative">
              <textarea
                value={form.comment}
                onChange={onChange("comment")}
                placeholder="Комментарий"
                maxLength={maxLen}
                className="
                  h-44 w-full resize-none rounded-[28px] bg-white px-6 py-5 text-[15px]
                  outline-none ring-1 ring-black/5
                  placeholder:text-zinc-400
                  focus:ring-2 focus:ring-white/70
                "
              />
              <div className="pointer-events-none absolute bottom-4 right-6 text-xs text-zinc-400">
                {form.comment.length}/{maxLen}
              </div>
            </div>

            {/* button */}
            <button
              type="submit"
              className="
                h-16 w-full rounded-full bg-zinc-900 text-white
                font-semibold tracking-wide
                shadow-sm
                transition active:scale-[0.99] hover:bg-zinc-950
              "
            >
              Отправить
            </button>

            {/* disclaimer */}
            <p className="text-center text-xs leading-relaxed text-white/70">
              Нажимая кнопку «Отправить», Вы даёте согласие на обработку <br />
              персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

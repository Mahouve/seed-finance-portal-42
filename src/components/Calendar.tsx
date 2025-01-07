import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { fr } from "date-fns/locale";

const events = [
  {
    id: 1,
    title: "Événement Principal",
    date: new Date(2025, 0, 30), // 30 janvier 2025
    description: "Rejoignez-nous pour notre événement principal de l'année.",
    location: "Paris, France"
  },
  {
    id: 2,
    title: "Master Classe",
    date: new Date(2025, 1, 22), // 22 février 2025
    description: "Une session intensive de formation avec nos experts.",
    location: "En ligne"
  }
];

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const getDayClass = (date: Date) => {
    const hasEvent = events.some(
      event => event.date.toDateString() === date.toDateString()
    );
    return hasEvent ? "bg-primary text-primary-foreground rounded-full" : "";
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    const event = events.find(
      e => e.date.toDateString() === date?.toDateString()
    );
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <CalendarComponent
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        locale={fr}
        modifiers={{ event: events.map(e => e.date) }}
        modifiersClassNames={{
          event: "bg-primary text-primary-foreground rounded-full"
        }}
        className="rounded-md border shadow"
      />

      {selectedEvent && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4">
              Voir les détails de l'événement
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 p-4">
              <p className="text-gray-600">{selectedEvent.description}</p>
              <p className="text-sm text-gray-500">
                Date: {selectedEvent.date.toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Lieu: {selectedEvent.location}
              </p>
              <Button className="w-full">S'inscrire</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
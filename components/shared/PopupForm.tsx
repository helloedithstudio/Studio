import CalendlyFrame from '@/components/shared/CalendlyFrame';

export default function PopupForm() {
  return (
    <>
      <div className="popup-form" id="popup-form">
        <div className="modal">
          <div className="popup-form__mask" />
          <div className="popup-form__inner">
            <div className="floating --bottomcenter">
              <i className="fa-solid fa-xmark closer" />
              <div className="scroll" data-lenis-prevent="">
                <CalendlyFrame />
              </div>
              <div className="gradient" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

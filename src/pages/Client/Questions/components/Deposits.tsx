import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../../components/UI/loading.tsx";

export default function Deposits() {
  const [document] = usePrismicDocumentByUID('for_clients', 'questions');
  const { language } = useLanguage();

  if (!document) {
    return <Loading/>;
  }

  return (
      <div >
        <h3 className='text-[20px] font-[600] leading-[30px] mb-[20px]'>{document.data.body[1].primary[`title_${language}`]}</h3>
        <div>
          <div className="join join-vertical ">
          {document.data.body[1].items.map((item: any, index: number) => (
                <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked={index === 0}/>
                  <div className="collapse-title text-[18px] font-[500] leading-[28px]">
                    {item[`question_${language}`]}
                  </div>
                  <div className="collapse-content">
                    <p className="text-[16px] font-[400] leading-[24px]">
                      {item[`answer_${language}`]}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
  // const {t} = useTranslation()
  // return (
  //   <div>
  //     <h3 className='text-[20px] font-[600] leading-[30px] mb-[20px]'>{t('routes.deposits')}</h3>
  //
  //     <div className='product-text'>
  //       Депозит — это финансовый инструмент, представляющий собой вклад денежных средств в банк или финансовое
  //       учреждение,
  //       который позволяет вкладчику получать доход в виде процентов. Депозиты могут быть разных видов:
  //
  //       Срочные депозиты — это вклады, которые размещаются на определенный срок (например, на 6 месяцев, год и т.д.). По
  //       истечении срока вкладчик может забрать свои деньги вместе с начисленными процентами. Обычно у срочных депозитов
  //       более высокая процентная ставка.
  //
  //       До востребования — депозиты, которые можно снять в любое время без потери начисленных процентов. Однако
  //       процентная
  //       ставка по таким депозитам обычно ниже, чем по срочным.
  //
  //       Накопительные депозиты — это вклады, где вкладчик регулярно пополняет счет. Эти депозиты часто используются для
  //       целей накопления средств, таких как покупка недвижимости, отпуск или другие крупные покупки.
  //
  //       Валютные депозиты — вклады, которые открываются в иностранной валюте, такой как доллар США, евро или другая
  //       валюта. Они могут быть выгодны в случае колебаний курсов валют.
  //
  //       Депозиты с капитализацией — это депозиты, где начисленные проценты добавляются к основной сумме вклада, и на них
  //       также начисляются проценты в следующем расчетном периоде.
  //
  //       Основные параметры, на которые обращают внимание при выборе депозита:
  //
  //       Процентная ставка — величина дохода, которую можно получить от депозита.
  //       Срок размещения — период, на который вкладчик готов разместить свои средства.
  //       Минимальная сумма вклада — некоторые депозиты требуют определенной минимальной суммы для открытия.
  //       Условия досрочного снятия — возможность забрать деньги до окончания срока депозита и при этом сохранить часть
  //       процентов.
  //       Капитализация процентов — возможность увеличения суммы вклада за счет добавления начисленных процентов.
  //       Также депозиты могут сопровождаться дополнительными условиями, такими как наличие страховки на вклад или участие
  //       в
  //       различных акциях.
  //
  //
  //     </div>
  //
  //   </div>
  // )
}

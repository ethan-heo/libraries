/**
 * @category react-hooks
 * @description 타겟을 제외한 다른 영역의 클릭 이벤트를 발생시킬 때 사용합니다.
 * @param target 타겟을 지정하기 위한 값
 * @param callback 타겟을 제외한 영역을 클릭할 때 발생시키는 callback 함수
 *
 * ```tsx
 * import { useClickOutOfArea } from "@ethan-heo/react-hooks"
 *
 * function TestComponent({ onClick }: { onClick: () => void }) {
 *      const ref = useRef<HTMLButtonElement>(null);
 *      useClickOutOfArea(ref, onClick);
 *
 *      return (
 *          <>
 *              outer
 *              <button ref={ref}>
 *                  <span>inner</span>
 *              </button>
 *          </>
 *      );
 *  }
 * ```
 */
export default function useClickOutOfArea<T extends HTMLElement>(target: Target<T>, callback: () => void): void;

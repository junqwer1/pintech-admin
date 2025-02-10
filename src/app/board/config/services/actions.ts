'use server'
import { redirect } from 'next/navigation'

/**
 * 게시판 설정 등록 & 수정
 *
 * @param params
 * @param formData
 * @returns
 */
export const updateBoard = async (params, formData: FormData) => {
  return redirect('/board/config/list')
}

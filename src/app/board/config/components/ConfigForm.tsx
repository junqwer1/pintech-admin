import React from 'react'
import styled from 'styled-components'
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'
import { TableCols } from '@/app/global/components/Tables'
import { Input } from '@/app/global/components/FormComponents'
import { BigButton, ButtonGroup } from '@/app/global/components/Buttons'
import Messages from '@/app/global/components/Messages'

const StyledForm = styled.form`
  table {
    th {
      width: 180px;
    }

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`

const ConfigForm = ({ form, onChange, onClick, actionState }) => {
  const [errors, formAction, isPending] = actionState

  return (
    <StyledForm action={formAction} autoComplete="off">
      <input type="hidden" name="open" value={form?.open ?? false} />
      <input type="hidden" name="useEditor" value={form?.useEditor ?? false} />
      <input
        type="hidden"
        name="useEditorImage"
        value={form?.useEditorImage ?? false}
      />
      <input
        type="hidden"
        name="useAttachFile"
        value={form?.useAttachFile ?? false}
      />
      <input
        type="hidden"
        name="useComment"
        value={form?.useComment ?? false}
      />
      <input
        type="hidden"
        name="listUnderView"
        value={form?.listUnderView ?? false}
      />
      <input
        type="hidden"
        name="locationAfterWriting"
        value={form?.locationAfterWriting ?? 'list'}
      />
      <input type="hidden" name="skin" value={form?.skin ?? 'default'} />

      <TableCols>
        <tbody>
          <tr>
            <th>게시판 ID</th>
            <td>
              <Input
                type="text"
                name="bid"
                value={form?.bid ?? ''}
                onChange={onChange}
              />
              <Messages color="danger">{errors?.bid}</Messages>
            </td>
          </tr>
          <tr>
            <th>게시판 이름</th>
            <td>
              <Input
                type="text"
                name="name"
                value={form?.name ?? ''}
                onChange={onChange}
              />
              <Messages color="danger">{errors?.name}</Messages>
            </td>
          </tr>
          <tr>
            <th>사용여부</th>
            <td>
              <span onClick={() => onClick('open', true)}>
                {form?.open ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('open', false)}>
                {form?.open ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>1페이지 게시글 수</th>
            <td>
              <Input
                type="number"
                name="rowsPerPage"
                value={form?.rowsPerPage ?? 20}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <th>페이지 링크수</th>
            <td>
              <Input
                type="number"
                name="pageRanges"
                value={form?.pageRanges ?? 10}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <th>에디터 사용</th>
            <td>
              <span onClick={() => onClick('useEditor', true)}>
                {form?.useEditor ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useEditor', false)}>
                {form?.useEditor ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>에디터 이미지 첨부</th>
            <td>
              <span onClick={() => onClick('useEditorImage', true)}>
                {form?.useEditorImage ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useEditorImage', false)}>
                {form?.useEditorImage ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>파일 첨부</th>
            <td>
              <span onClick={() => onClick('useAttachFile', true)}>
                {form?.useAttachFile ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useAttachFile', false)}>
                {form?.useAttachFile ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>사용여부</th>
            <td>
              <span onClick={() => onClick('useComment', true)}>
                {form?.useComment ? (
                  <MdRadioButtonChecked />
                ) : (
                  <MdRadioButtonUnchecked />
                )}
                사용
              </span>

              <span onClick={() => onClick('useComment', false)}>
                {form?.useComment ? (
                  <MdRadioButtonUnchecked />
                ) : (
                  <MdRadioButtonChecked />
                )}
                미사용
              </span>
            </td>
          </tr>
          <tr>
            <th>글보기페이지 목록</th>
            <td></td>
          </tr>
        </tbody>
      </TableCols>
      <ButtonGroup width={450} className="button-group center">
        <BigButton type="reset" color="white" disabled={isPending}>
          다시입력
        </BigButton>
        <BigButton type="submit" color="dark" disabled={isPending}>
          등록하기
        </BigButton>
      </ButtonGroup>
    </StyledForm>
  )
}

export default React.memo(ConfigForm)

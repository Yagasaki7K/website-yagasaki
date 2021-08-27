import Container from './container'
import cn from 'classnames'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        ' border-accent-7 text-white topGithub': preview
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              O código-fonte desse blog está{' '}
              <a
                href={`https://github.com/Yagasaki7K/website-yagasaki`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                disponível no GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert

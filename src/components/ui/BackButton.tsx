'use client';
import {useRouter} from '@/navigation';

function BackButton({
                        className,
                        children,
                    }: React.PropsWithChildren<{
    className?: string;
}>) {
    const router = useRouter();
    return (
        <button className={className} onClick={() => router.back()}>
            {children}
        </button>
    );
}

export default BackButton;
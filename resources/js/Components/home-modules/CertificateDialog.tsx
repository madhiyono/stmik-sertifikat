import { CertificateData } from "@/types";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CertificateData[];
    certificateName: string;
}

const CertificateDialog: React.FC<Props> = ({
    open,
    onOpenChange,
    data,
    certificateName,
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Apa Anda Ingin Mendownload Sertifikat?
                    </DialogTitle>
                    <DialogDescription>
                        Donwload Sertifikat STMIK Pontianak
                    </DialogDescription>
                    <p>
                        <b>{certificateName}</b>
                    </p>
                    <p>
                        Sertifikat Atas Nama:{" "}
                        <b>
                            {data[0].nama_lengkap} ({data[0].nim})
                        </b>
                    </p>
                </DialogHeader>
                <DialogFooter>
                    <div className="flex justify-center xl:justify-start w-full">
                        <Button
                            onClick={() => {
                                window.open(data[0].link, "_blank");
                            }}
                        >
                            Download
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CertificateDialog;

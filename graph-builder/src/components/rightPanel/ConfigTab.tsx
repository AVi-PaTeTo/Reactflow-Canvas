import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import React, { useState } from 'react';

export default function ConfigTab() {
    const [configStats, setConfigStats] = useState({ cpu: 10, memory: 12, disk: 45 });
    function handleSliderChange(key: string, value: number | readonly number[]) {
        setConfigStats((prev) => ({ ...prev, [key]: value }));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Number(e.target.value);
        if (newValue >= 0 && newValue <= 50) {
            setConfigStats((prev) => ({ ...prev, [e.target.id]: newValue }));
        }
    }
    return (
        <FieldGroup className="gap-2">
            <Field className="gap-0">
                <FieldLabel htmlFor="fieldgroup-title">Title</FieldLabel>
                <Input id="fieldgroup-title" placeholder="Enter title" />
            </Field>
            <Field className="gap-0">
                <FieldLabel htmlFor="fieldgroup-description">
                    Description <span className=" text-foreground/50">(optional)</span>
                </FieldLabel>
                <Textarea id="fieldgroup-description" placeholder="Describe this node" />
            </Field>
            <Field>
                <div className="flex justify-between items-center gap-2">
                    <FieldLabel htmlFor="cpu">CPU</FieldLabel>{' '}
                    <Input
                        id="cpu"
                        className="w-17"
                        value={configStats.cpu}
                        placeholder="6"
                        type="number"
                        min={1}
                        max={50}
                        onChange={handleInputChange}
                    />
                </div>
                <Slider
                    value={configStats.cpu}
                    onValueChange={(value) => handleSliderChange('cpu', value)}
                    min={1}
                    max={50}
                    step={1}
                />
            </Field>
            <Field>
                <div className="flex justify-between items-center gap-2">
                    <FieldLabel htmlFor="memory">Memory</FieldLabel>{' '}
                    <Input
                        id="memory"
                        className="w-17"
                        value={configStats.memory}
                        placeholder="6"
                        type="number"
                        min={1}
                        max={50}
                        onChange={handleInputChange}
                    />
                </div>
                <Slider
                    value={configStats.memory}
                    onValueChange={(value) => handleSliderChange('memory', value)}
                    min={1}
                    max={50}
                    step={1}
                />
            </Field>
            <Field>
                <div className="flex justify-between items-center gap-2">
                    <FieldLabel htmlFor="disk">Disk</FieldLabel>{' '}
                    <Input
                        id="disk"
                        className="w-17"
                        value={configStats.disk}
                        placeholder="6"
                        type="number"
                        min={1}
                        max={50}
                        onChange={handleInputChange}
                    />
                </div>
                <Slider
                    value={configStats.disk}
                    onValueChange={(value) => handleSliderChange('disk', value)}
                    min={1}
                    max={50}
                    step={1}
                />
            </Field>
        </FieldGroup>
    );
}
